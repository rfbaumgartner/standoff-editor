import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { StandoffService } from '../../core/standoff.service';

@Component({
  selector: 'app-plain-text-editor',
  templateUrl: './plain-text-editor.component.html',
  styleUrls: ['./plain-text-editor.component.css']
})
export class PlainTextEditorComponent implements OnInit, OnDestroy {

  text: string;

  private textSubscription: Subscription;

  constructor(private standoffService: StandoffService, private router: Router) { }

  ngOnInit() {
    this.textSubscription =
      this.standoffService.getText()
        .subscribe((t: string) => {
          this.text = t;
        });
  }

  ngOnDestroy() {
    this.textSubscription.unsubscribe();
  }

  exitEditMode() {
    this.standoffService.postText(this.text);
    this.router.navigate(['/standoff']);
  }

}
