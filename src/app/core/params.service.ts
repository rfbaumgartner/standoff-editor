import { Injectable } from '@angular/core';

@Injectable()
export class ParamsService {

  private projectIRI: string;
  private resourceIRI: string;
  private resourceAlias: string;

  constructor() { }

  setProjectIRI(iri: string) {
    this.projectIRI = iri;
  }

  setResource(alias: string) {
    this.resourceAlias = alias;
    this.resourceIRI = alias;
  }

  getProjectIRI(): string {
    return this.projectIRI;
  }

  getResourceIRI(): string {
    return this.resourceIRI;
  }

}
