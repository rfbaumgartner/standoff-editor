import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AuthenticationFormComponent],
  exports: [AuthenticationFormComponent]
})
export class AuthenticationFormModule { }
