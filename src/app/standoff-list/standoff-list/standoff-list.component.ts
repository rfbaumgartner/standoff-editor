import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Standoff } from '../../core/standoff';
import { StandoffService } from '../../core/standoff.service';
import { TextService } from '../../core/text.service';

@Component({
  selector: 'app-standoff-list',
  templateUrl: './standoff-list.component.html',
  styleUrls: ['./standoff-list.component.css']
})
export class StandoffListComponent implements OnInit, OnDestroy {

  standoff: Array<Standoff>;
  text: string;
  private standoffSubscription: Subscription;

  constructor(private standoffService: StandoffService, private textService: TextService) { }

  ngOnInit() {
    this.text = this.textService.getText();

    this.standoffSubscription = this.standoffService.getStandoffs()
      .subscribe((s: Array<Standoff>) => {
        this.standoff = s;
      });
  }

  ngOnDestroy() {
    this.standoffSubscription.unsubscribe();
  }

  deleteTag(iri: string) {
    this.standoffService.deleteStandoff(iri);
  }

}
