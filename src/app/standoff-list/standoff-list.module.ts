import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandoffListComponent } from './standoff-list/standoff-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StandoffListComponent],
  exports: [StandoffListComponent]
})
export class StandoffListModule { }
