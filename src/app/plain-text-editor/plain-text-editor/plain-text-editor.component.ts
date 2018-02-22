import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParamsService } from '../../core/params.service';
import { TextService } from '../../core/text.service';

@Component({
  selector: 'app-plain-text-editor',
  templateUrl: './plain-text-editor.component.html',
  styleUrls: ['./plain-text-editor.component.css']
})
export class PlainTextEditorComponent implements OnInit {

  text: string;
  resIRI: string;
  projIRI: string;

  constructor(
    private textService: TextService,
    private paramsService: ParamsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.text = this.textService.getText();
    this.resIRI = this.paramsService.getResourceIRI();
    this.projIRI = this.paramsService.getProjectIRI();

    if (this.projIRI === undefined || this.resIRI === undefined) {
      this.router.navigate(['/']);
    }
  }

  exitEditMode() {
    this.textService.postText(this.text);
    this.router.navigate(['/standoff']);
  }

}
