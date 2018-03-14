import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ParamsService } from './params.service';

@Injectable()
export class TextService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService,
              private paramsService: ParamsService) { }

  postText(text: string) {

    const resourceParams = {
      'restype_id': 'http://www.knora.org/ontology/anything#Thing',
      'properties': {
        'http://www.knora.org/ontology/anything#hasRichtext': [
          {'richtext_value': {'utf8str': text}}
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

  putText(text: string, textIRI: string) {

    const resourceParams = {
      'richtext_value': {'utf8str': text},
      'comment': 'text' + Math.random() * 1000,
      'project_id': this.paramsService.getProjectIRI()
    };

    const httpOptions = {
      headers: new HttpHeaders(this.authenticationService.getAuthorization())
    };

    this.httpClient.put('http://localhost:3333/v1/values/' + encodeURIComponent(textIRI), resourceParams, httpOptions )
      .subscribe(
        res => {
          console.log(res);
          console.log(resourceParams);
        },
        err => {
          console.log('Error occured');
        }
      );
  }


  getText() {
    return this.httpClient.get('http://localhost:3333/v2/resources/' + this.paramsService.getResourceIRI());
  }
}
