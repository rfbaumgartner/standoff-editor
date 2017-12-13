import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  mode: string = 'enter';
  utf8string: string;
  selectedString: string;
  startIndex: number;
  endIndex: number;
  constructor() { }

  ngOnInit() {
  }

  getSelectionText() {
    let text = '';
    let start = 0;
    let length = 0;
    if (window.getSelection) {
      text = window.getSelection().toString();
      start = window.getSelection().anchorOffset;
      length = text.length;
    }
    if (this.utf8string.substring(start, start + length) === text) {
      this.selectedString = text;
      this.startIndex = start;
      this.endIndex = start + length;
    }

    alert('New standoff annotation <<' + this.selectedString + '>>, from index ' + this.startIndex + ' to ' + this.endIndex);
  }

  exitEditMode() {
    this.mode = 'tag';
  }

  editText() {
    this.mode = 'enter';
  }
}
