import { Component } from '@angular/core';
import { ParamsService } from './core/params.service';
import { StandoffService } from './core/standoff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Standoff editor';

  constructor(private standoffService: StandoffService, private paramsService: ParamsService) {}
}
