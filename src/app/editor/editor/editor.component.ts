import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Standoff } from '../../core/standoff';
import { StandoffService } from '../../core/standoff.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {

  text: string;
  private textSubscription: Subscription;

  constructor(private standoffService: StandoffService, private router: Router) { }

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

  editText() {
    this.router.navigate(['/text']);
  }

  annotateWithTag(selectedTag: string) {
    const selection: Selection = this.getStandoffOfSelected();
    if (selection) {
      const standoff = new Standoff();
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
    const selection: Selection = this.getStandoffOfSelected();
    if (selection) {
      const standoff = new Standoff();
      standoff.startIndex = selection.anchorOffset;
      standoff.endIndex = selection.anchorOffset + selection.toString().length;
      standoff.tag = 'ref';
      standoff.iri = Math.random().toString();
      standoff.linkIRI = this.text.substring(standoff.startIndex, standoff.endIndex);
      standoff.propertyName = property;
      alert('New index link from index ' + standoff.startIndex + ' to ' + standoff.endIndex
        + ' \nIn the full app it would now search for a ' + standoff.propertyName + '\n'
        + 'with the name <<' + this.text.substring(standoff.startIndex, standoff.endIndex) + '>>.\n'
        + 'Alternatively you could search for another one or create one.');
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
