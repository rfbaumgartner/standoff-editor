import { Component, OnInit } from '@angular/core';
import { ParamsService } from '../../core/params.service';

@Component({
  selector: 'app-res-selector',
  templateUrl: './res-selector.component.html',
  styleUrls: ['./res-selector.component.css']
})
export class ResSelectorComponent implements OnInit {

  projectIRI: string = 'http://rdfh.ch/projects/anything';
  resourceAlias: string;

  GlobalResourceIRI: string;
  GlobalProjectIRI: string;

  constructor(private paramsService: ParamsService) { }

  ngOnInit() {
  }

  setProjectIRI() {
    this.paramsService.setProjectIRI(this.projectIRI);
    this.GlobalProjectIRI = this.paramsService.getProjectIRI();
  }

  setResource() {
    this.paramsService.setResource(this.resourceAlias);
    this.GlobalResourceIRI = this.paramsService.getResourceIRI();
  }

}
