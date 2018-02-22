import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResSelectorComponent } from './res-selector/res-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ResSelectorComponent],
  exports: [ResSelectorComponent]
})
export class ResSelectorModule { }
