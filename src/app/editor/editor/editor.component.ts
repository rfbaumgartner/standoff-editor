import { Component, OnInit } from '@angular/core';
import { stringDistance } from 'codelyzer/util/utils';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  mode: string = 'enter';
  utf8string: string;
  standoffs: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  exitEditMode() {
    this.mode = 'tag';
  }

  editText() {
    this.mode = 'enter';
  }

  annotateWithTag(selectedTag: string) {
    let s = this.getStandoffOfSelected(selectedTag);
    if (s) {
      this.standoffs.push(s);
      this.standoffs = this.standoffs.slice();
      // this.getSelectionText();
      // this.tag = selectedTag;
      alert('New standoff annotation of type <<' + s['tag'] + '>> around <<'
        + this.utf8string.substring(s['start'], s['end']) + '>>, from index ' + s['start'] + ' to ' + s['end']);
    }
  }

  getStandoffOfSelected(tag: string) {
    let text = '';
    let start = 0;
    let length = 0;
    let iri = '0';
    if (window.getSelection().anchorNode.parentNode['id']  === 'annotation_view' && window.getSelection().toString().length > 0) {
      text = window.getSelection().toString();
      start = window.getSelection().anchorOffset;
      length = text.length;
      iri = Math.random().toString();
      return {'start': start, 'end': start + length, 'tag': tag, 'iri': iri};
    } else {
      return null;
    }
  }

  deleteTag(iri: string) {
    this.standoffs = this.standoffs.filter(function (item: any) {
      return item['iri'] !== iri;
    });
  }
}
