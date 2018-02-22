import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlainTextEditorComponent } from './plain-text-editor/plain-text-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PlainTextEditorComponent],
  exports: [PlainTextEditorComponent]
})
export class PlainTextEditorModule { }
