import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationService } from './core/authentication.service';
import { CoreModule } from './core/core.module';
import { ParamsService } from './core/params.service';
import { StandoffService } from './core/standoff.service';
import { TextService } from './core/text.service';
import { PlainTextEnterViewModule } from './plain-text-enter-view/plain-text-enter-view.module';
import { ResSelectorViewModule } from './res-selector-view/res-selector-view.module';
import { StandoffEditViewModule } from './standoff-edit-view/standoff-edit-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    PlainTextEnterViewModule,
    ResSelectorViewModule,
    RouterModule.forRoot([    ]),
    StandoffEditViewModule
  ],
  providers: [AuthenticationService, StandoffService, ParamsService, TextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
