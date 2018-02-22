import { Injectable } from '@angular/core';

@Injectable()
export class TextService {

  private text: string;

  constructor() { }

  postText(text: string) {
    // here I would post the new text and get the new text
    this.text = text;
  }

  getText(): string {
    return this.text;
  }
}
