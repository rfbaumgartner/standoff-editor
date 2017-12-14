import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-standoff-list',
  templateUrl: './standoff-list.component.html',
  styleUrls: ['./standoff-list.component.css']
})
export class StandoffListComponent implements OnInit {

  @Input() text: string;
  @Input() standoffs: Array<any>;
  @Output() deleteTag: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
