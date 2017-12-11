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
  formattedText: string;
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

      this.formatText();
    }

    alert('New standoff annotation <<' + this.selectedString + '>>, from index ' + this.startIndex + ' to ' + this.endIndex);
  }

  formatText() {
    this.formattedText = this.utf8string.substring(0, this.startIndex)
      + '<b>'
      + this.utf8string.substring(this.startIndex, this.endIndex)
      + '</b>'
      + this.utf8string.substring(this.endIndex, this.utf8string.length);
  }

  exitEditMode() {
    this.mode = 'tag';
    this.formattedText = this.utf8string;
  }
}
