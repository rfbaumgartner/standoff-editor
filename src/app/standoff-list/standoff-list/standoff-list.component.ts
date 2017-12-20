import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Standoff } from '../../core/standoff';
import { StandoffService } from '../../core/standoff.service';

@Component({
  selector: 'app-standoff-list',
  templateUrl: './standoff-list.component.html',
  styleUrls: ['./standoff-list.component.css']
})
export class StandoffListComponent implements OnInit, OnDestroy {

  standoff: Array<Standoff>;
  text: string;
  private textSubscription: Subscription;
  private standoffSubscription: Subscription;

  constructor(private standoffService: StandoffService) { }

  ngOnInit() {
    this.textSubscription = this.standoffService.getText()
      .subscribe((t: string) => {
        this.text = t;
      });

    this.standoffSubscription = this.standoffService.getStandoffs()
      .subscribe((s: Array<Standoff>) => {
        this.standoff = s;
      });
  }

  ngOnDestroy() {
    this.textSubscription.unsubscribe();
    this.standoffSubscription.unsubscribe();
  }

  deleteTag(iri: string) {
    this.standoffService.deleteStandoff(iri);
  }

}
