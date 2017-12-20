import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StandoffService } from './core/standoff.service';
import { EditorModule } from './editor/editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    EditorModule,
    FormsModule,
    HttpModule
  ],
  providers: [StandoffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
