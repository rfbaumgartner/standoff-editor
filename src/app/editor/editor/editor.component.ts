import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Standoff } from '../../core/standoff';
import { StandoffService } from '../../core/standoff.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  mode: string = 'enter';
  text: string;
  private textSubscription: Subscription;

  constructor(private standoffService: StandoffService) { }

  ngOnInit() {
    this.textSubscription =
    this.standoffService.getText()
      .subscribe((t: string) => {
        this.text = t;
      });
  }

  ngOnDestroy() {
    this.textSubscription.unsubscribe();
  }

  exitEditMode() {
    this.standoffService.postText(this.text);
    this.mode = 'tag';
  }

  editText() {
    this.mode = 'enter';
  }

  annotateWithTag(selectedTag: string) {
    let selection: Selection = this.getStandoffOfSelected();
    if (selection) {
      let standoff = new Standoff();
      standoff.startIndex = selection.anchorOffset;
      standoff.endIndex = selection.anchorOffset + selection.toString().length;
      standoff.tag = selectedTag;
      standoff.iri = Math.random().toString();
      alert('New standoff annotation of type <<' + standoff['tag'] + '>> \naround <<'
        + this.text.substring(standoff.startIndex, standoff.endIndex) + '>>, from index '
        + standoff.startIndex + ' to ' + standoff.endIndex);
      this.standoffService.postStandoff(standoff);
    }
  }

  annotateLinked(property: string) {
    let selection: Selection = this.getStandoffOfSelected();
    if (selection) {
      let standoff = new Standoff();
      standoff.startIndex = selection.anchorOffset;
      standoff.endIndex = selection.anchorOffset + selection.toString().length;
      standoff.tag = 'ref';
      standoff.iri = Math.random().toString();
      standoff.linkIRI = this.text.substring(standoff.startIndex, standoff.endIndex);
      standoff.propertyName = property;
      alert('New index link from index ' + standoff.startIndex + ' to ' + standoff.endIndex + '\n Search for <<'
        + this.text.substring(standoff.startIndex, standoff.endIndex) + '>>');
      this.standoffService.postStandoff(standoff);
    }
  }

  getStandoffOfSelected(): Selection {
    if (window.getSelection().anchorNode.parentNode['id']  === 'annotation_view' && window.getSelection().toString().length > 0) {
      return window.getSelection();
    } else {
      return null;
    }
  }
}
