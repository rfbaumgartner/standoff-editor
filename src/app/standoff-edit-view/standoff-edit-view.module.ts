import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorModule } from '../editor/editor.module';
import { StandoffEditViewComponent } from './standoff-edit-view/standoff-edit-view.component';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    RouterModule.forChild([
      { path: 'standoff', component: StandoffEditViewComponent }
    ])
  ],
  declarations: [StandoffEditViewComponent]
})
export class StandoffEditViewModule { }
