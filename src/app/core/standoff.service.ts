import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { ParamsService } from './params.service';
import { Standoff } from './standoff';

@Injectable()
export class StandoffService {

  private standoffSubject: BehaviorSubject<Array<Standoff>> = new BehaviorSubject<Array<Standoff>>([]);


  constructor(private paramsService: ParamsService,
              private authenticationService: AuthenticationService,
              private httpClient: HttpClient) { }

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

    const resourceParams = {
      'restype_id': 'http://www.knora.org/ontology/standoff#StandoffBoldTag',
      'properties': {
        'http://www.knora.org/ontology/knora-base#standoffTagHasEnd': [
          {'int_value': s.endIndex}
        ],
        'http://www.knora.org/ontology/knora-base#standoffTagHasStart': [
          {'int_value': s.startIndex}
        ],
        'http://www.knora.org/ontology/knora-base#standoffTagHasStartIndex': [
          {'int_value': 1}
        ],
        'http://www.knora.org/ontology/knora-base#standoffTagHasStartParent': [
          {'int_value': 1}
        ],
        'http://www.knora.org/ontology/knora-base#standoffTagHasUUID': [
          {'richtext_value': {'utf8str': '1234'}}
        ]
      },
      'label': 'text' + Math.random() * 1000,
      'project_id': this.paramsService.getProjectIRI()
    };

    const httpOptions = {
      headers: new HttpHeaders(this.authenticationService.getAuthorization())
    };

    this.httpClient.post('http://localhost:3333/v1/resources', resourceParams, httpOptions )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );


  }

  getStandoffs(): Observable<Array<Standoff>> {
    return this.standoffSubject.asObservable();
  }

}
