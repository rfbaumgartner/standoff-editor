import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParamsService } from '../../core/params.service';
import { TextService } from '../../core/text.service';

@Component({
  selector: 'app-plain-text-editor',
  templateUrl: './plain-text-editor.component.html',
  styleUrls: [ './plain-text-editor.component.css' ]
})
export class PlainTextEditorComponent implements OnInit {

  text: string;
  resIRI: string;
  projIRI: string;

  constructor(private textService: TextService,
              private paramsService: ParamsService,
              private router: Router) {
  }

  ngOnInit() {
    this.textService.getText().subscribe(res => this.text = res);
    this.resIRI = this.paramsService.getResourceIRI();
    this.projIRI = this.paramsService.getProjectIRI();

    if (this.projIRI === undefined || this.resIRI === undefined) {
      this.router.navigate([ '/' ]);
    }
  }

  exitEditMode() {
    this.textService.postText(this.text);
    this.router.navigate([ '/standoff' ]);
  }
/*
  const a = {
    'res_id': 'http://rdfh.ch/anything/gLeKQE1BQVuxX0cxAjuYIw',
    'results': {
      'http://www.knora.org/ontology/knora-base#hasStillImageFileValue': [ {
        'value': {
          'dateval1': null,
          'ival': null,
          'dateprecision1': null,
          'textval': { 'string': 'logo.jpg' },
          'person_id': { 'string': 'http://rdfh.ch/users/root' },
          'property_id': { 'string': 'http://www.knora.org/ontology/knora-base#hasStillImageFileValue' },
          'calendar': null,
          'timeval2': null,
          'dval': null,
          'dateval2': null,
          'order': { 'integer': 1 },
          'resource_id': { 'string': 'http://rdfh.ch/anything/gLeKQE1BQVuxX0cxAjuYIw' },
          'timeval1': null,
          'dateprecision2': null
        }, 'id': 'http://rdfh.ch/anything/gLeKQE1BQVuxX0cxAjuYIw/values/KRinqOfHSi242ft8hcctpg'
      }, {
        'value': {
          'dateval1': null,
          'ival': null,
          'dateprecision1': null,
          'textval': { 'string': 'logo.jpg' },
          'person_id': { 'string': 'http://rdfh.ch/users/root' },
          'property_id': { 'string': 'http://www.knora.org/ontology/knora-base#hasStillImageFileValue' },
          'calendar': null,
          'timeval2': null,
          'dval': null,
          'dateval2': null,
          'order': { 'integer': 1 },
          'resource_id': { 'string': 'http://rdfh.ch/anything/gLeKQE1BQVuxX0cxAjuYIw' },
          'timeval1': null,
          'dateprecision2': null
        }, 'id': 'http://rdfh.ch/anything/gLeKQE1BQVuxX0cxAjuYIw/values/DrhizGLiSXSVb4GJgno5og'
      } ]
    },
    'status': 0
  };
*/
}
