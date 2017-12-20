import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Standoff } from './standoff';

@Injectable()
export class StandoffService {

  private textSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private standoffSubject: BehaviorSubject<Array<Standoff>> = new BehaviorSubject<Array<Standoff>>([]);


  constructor() { }

  postText(text: string) {
    // here I would post the new text and get the new text
    this.textSubject.next(text);
  }

  getText(): Observable<string> {
    return this.textSubject.asObservable();
  }

  deleteStandoff(iri: string) {
    // here I would delete the standoff and get the new standoff list
    const standoffs = this.standoffSubject.getValue().filter(function (item: Standoff) {
      return item.iri !== iri;
    });

    this.standoffSubject.next(standoffs);
  }

  postStandoff(s: Standoff) {
    // here I would post the new standoff and get the new standoff list
    const standoffs = this.standoffSubject.getValue().concat([s]);
    this.standoffSubject.next(standoffs);
  }

  getStandoffs(): Observable<Array<Standoff>> {
    return this.standoffSubject.asObservable();
  }

}
