import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs/Subscription';
import { Standoff } from '../../core/standoff';
import { StandoffService } from '../../core/standoff.service';
import { TextService } from '../../core/text.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit, OnDestroy {

  standoffs: Array<Standoff>;
  text: string;
  private standoffSubscription: Subscription;

  // viewText: SafeHtml;
  nonOverlappingText: SafeHtml;

  constructor(private sanitized: DomSanitizer, private standoffService: StandoffService, private textService: TextService) { }

  ngOnInit() {
    this.text = this.textService.getText();

    this.standoffSubscription = this.standoffService.getStandoffs()
      .subscribe((s: Array<Standoff>) => {
        this.standoffs = s;

        if (this.text && this.standoffs) {

          this.nonOverlappingText = this.createNonOverlappingText(this.text, this.standoffs);
        }
      });
  }

  ngOnDestroy() {
    this.standoffSubscription.unsubscribe();
  }

  /*
  createViewText(t: string, s: Array<Standoff>): SafeHtml {

    const breakingPoints = new Set([0, t.length]);
    let vt = '';

    for (let i = 0; i < s.length; i++) {
      breakingPoints.add(s[i].startIndex);
      breakingPoints.add(s[i].endIndex);
    }
    const breakingPointList: number[] = Array.from(breakingPoints).sort((n1: number, n2: number) => n1 - n2);

    for (let i = 0; i + 1 < breakingPointList.length; i++) {
      for (let j = 0; j < s.length; j++) {
        if (breakingPointList[ i ] === s[ j ].endIndex) {
          vt = vt + '</' + s[ j ].tag + '>';
        }
      }
      for (let j = 0; j < s.length; j++) {
        if (breakingPointList[ i ] === s[ j ].startIndex) {
          vt = vt + '<' + s[ j ].tag + '>';
        }
      }
      vt = vt + t.substring(breakingPointList[i], breakingPointList[i + 1])
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;');

    }
    return this.sanitized.bypassSecurityTrustHtml(vt);
  }
  */

  createNonOverlappingText(t: string, s: Array<Standoff>): SafeHtml {

    const breakingPoints = new Set([0, t.length]);
    let vt = '';

    for (let i = 0; i < s.length; i++) {
      breakingPoints.add(s[ i ].startIndex);
      breakingPoints.add(s[ i ].endIndex);
    }
    const breakingPointList: number[] = Array.from(breakingPoints).sort((n1: number, n2: number) => n1 - n2);

    for (let i = 0; i + 1 < breakingPointList.length; i++) {
      let styles: string = '';
      for (let j = 0; j < s.length; j++) {
        if ( s[ j ].startIndex <= breakingPointList[ i ] && breakingPointList[ i + 1 ] <= s[ j ].endIndex) {
          switch (s[j].tag) {
            case 'b': {
              styles = styles + 'font-weight: bold;';
              break;
            }
            case 'i': {
              styles = styles + 'font-style: italic;';
              break;
            }
            case 'ref': {
              styles = styles + 'background-color: cornflowerblue;';
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
