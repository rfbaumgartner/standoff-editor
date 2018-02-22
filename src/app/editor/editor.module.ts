import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StandoffListModule } from '../standoff-list/standoff-list.module';
import { ViewerModule } from '../viewer/viewer.module';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'edit', component: EditorComponent }
    ]),
    StandoffListModule,
    ViewerModule
  ],
  declarations: [EditorComponent],
  exports: [EditorComponent]
})
export class EditorModule { }
