import { Component } from '@angular/core';
import { StandoffService } from './core/standoff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'How to edit standoff';

  constructor(private standoffService: StandoffService) {}
}
