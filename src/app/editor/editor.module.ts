import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StandoffListModule } from '../standoff-list/standoff-list.module';
import { ViewerModule } from '../viewer/viewer.module';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StandoffListModule,
    ViewerModule
  ],
  declarations: [EditorComponent],
  exports: [EditorComponent]
})
export class EditorModule { }
