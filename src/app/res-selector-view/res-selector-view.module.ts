import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResSelectorModule } from '../res-selector/res-selector.module';
import { ResSelectorComponent } from '../res-selector/res-selector/res-selector.component';
import { ResSelectorViewComponent } from './res-selector-view/res-selector-view.component';

@NgModule({
  imports: [
    CommonModule,
    ResSelectorModule,
    RouterModule.forChild([
      { path: '', component: ResSelectorViewComponent }
    ])
  ],
  declarations: [ResSelectorViewComponent]
})
export class ResSelectorViewModule { }
