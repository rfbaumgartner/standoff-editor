import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  textIRI: string;
  resIRI: string;
  projIRI: string;

  constructor(private textService: TextService,
              private paramsService: ParamsService,
              private router: Router) {
  }

  ngOnInit() {
    this.textService.getText().subscribe(res => {
      this.text = res['schema:itemListElement']['incunabula:description']['knora-api:valueAsString'];
      this.textIRI = res['schema:itemListElement']['incunabula:description']['@id'];
    });
    this.resIRI = this.paramsService.getResourceIRI();
    this.projIRI = this.paramsService.getProjectIRI();

    if (this.projIRI === undefined || this.resIRI === undefined) {
      this.router.navigate([ '/' ]);
    }
  }

  exitEditMode() {
    this.textService.putText(this.text, this.textIRI);
    this.router.navigate([ '/standoff' ]);
  }
}
