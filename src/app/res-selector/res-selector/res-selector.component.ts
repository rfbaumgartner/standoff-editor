import { Component, OnInit } from '@angular/core';
import { ParamsService } from '../../core/params.service';

@Component({
  selector: 'app-res-selector',
  templateUrl: './res-selector.component.html',
  styleUrls: ['./res-selector.component.css']
})
export class ResSelectorComponent implements OnInit {

  projectIri: string;
  resourceAlias: string;

  constructor(private paramsService: ParamsService) { }

  ngOnInit() {
  }

  setProjectIRI() {
    this.paramsService.setProjectIRI(this.projectIri);
  }

  setResource() {
    this.paramsService.setResource(this.resourceAlias);
  }

}
