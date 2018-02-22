import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorModule } from '../editor/editor.module';
import { PlainTextEditorModule } from '../plain-text-editor/plain-text-editor.module';
import { PlainTextEnterViewComponent } from './plain-text-enter-view/plain-text-enter-view.component';

@NgModule({
  imports: [
    CommonModule,
    PlainTextEditorModule,
    RouterModule.forChild([
      { path: 'text', component: PlainTextEnterViewComponent }
    ]),
    EditorModule
  ],
  declarations: [PlainTextEnterViewComponent]
})
export class PlainTextEnterViewModule { }
