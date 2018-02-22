import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ParamsService } from './core/params.service';
import { StandoffService } from './core/standoff.service';
import { TextService } from './core/text.service';
import { EditorModule } from './editor/editor.module';
import { PlainTextEnterViewModule } from './plain-text-enter-view/plain-text-enter-view.module';
import { ResSelectorViewModule } from './res-selector-view/res-selector-view.module';
import { ResSelectorModule } from './res-selector/res-selector.module';
import { ResSelectorComponent } from './res-selector/res-selector/res-selector.component';
import { StandoffEditViewModule } from './standoff-edit-view/standoff-edit-view.module';
import { StandoffListComponent } from './standoff-list/standoff-list/standoff-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    PlainTextEnterViewModule,
    ResSelectorViewModule,
    RouterModule.forRoot([    ]),
    StandoffEditViewModule
  ],
  providers: [StandoffService, ParamsService, TextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
