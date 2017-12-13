import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnChanges {

  @Input() text: string; // = 'Geht es mit überschneidenden Annotationen?';
  @Input() standoffs: Array<any>;
  /*=
    [
      { 'start': 0, 'end': 4, 'tag': 'i' },
      { 'start': 2, 'end': 6, 'tag': 'b' },
      { 'start': 10, 'end': 14, 'tag': 'i' },
      { 'start': 14, 'end': 16, 'tag': 'b' }
    ];
    */
  viewText: SafeHtml;
  nonOverlappingText: SafeHtml;

  constructor(private sanitized: DomSanitizer) { }

  ngOnChanges() {
    if (this.text && this.standoffs) {
      this.viewText = this.createViewText(this.text, this.standoffs);
      this.nonOverlappingText = this.createNonOverlappingText(this.text, this.standoffs);
    }
  }

  createViewText(t: string, s: Array<any>): SafeHtml {

    let breakingPoints = new Set([0, t.length]);
    let vt = '';

    for (let i = 0; i < s.length; i++) {
      breakingPoints.add(s[i]['start']);
      breakingPoints.add(s[i]['end']);
    }
    let breakingPointList: number[] = Array.from(breakingPoints).sort((n1: number, n2: number) => n1 - n2);

    for (let i = 0; i + 1 < breakingPointList.length; i++) {
      for (let j = 0; j < s.length; j++) {
        if (breakingPointList[ i ] === s[ j ][ 'end' ]) {
          vt = vt + '</' + s[ j ][ 'tag' ] + '>';
        }
      }
      for (let j = 0; j < s.length; j++) {
        if (breakingPointList[ i ] === s[ j ]['start']) {
          vt = vt + '<' + s[ j ]['tag'] + '>';
        }
      }
      vt = vt + t.substring(breakingPointList[i], breakingPointList[i + 1])
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;');

    }
    return this.sanitized.bypassSecurityTrustHtml(vt);
  }

  createNonOverlappingText(t: string, s: Array<any>): SafeHtml {

    let breakingPoints = new Set([0, t.length]);
    let vt = '';

    for (let i = 0; i < s.length; i++) {
      breakingPoints.add(s[ i ]['start']);
      breakingPoints.add(s[ i ]['end']);
    }
    let breakingPointList: number[] = Array.from(breakingPoints).sort((n1: number, n2: number) => n1 - n2);

    for (let i = 0; i + 1 < breakingPointList.length; i++) {
      let styles: string = '';
      for (let j = 0; j < s.length; j++) {
        if ( s[ j ][ 'start' ] <= breakingPointList[ i ] && breakingPointList[ i + 1 ] <= s[ j ][ 'end' ]) {
          switch (s[j]['tag']) {
            case 'b': {
              styles = styles + 'font-weight: bold;';
              break;
            }
            case 'i': {
              styles = styles + 'font-style: italic;';
              break;
            }
          }
        }
      }
      vt = vt + '<span style="' + styles + '">';
      vt = vt + t.substring(breakingPointList[i], breakingPointList[i + 1])
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;');
      vt = vt + '</span>';
    }
    return this.sanitized.bypassSecurityTrustHtml(vt);
  }

}
