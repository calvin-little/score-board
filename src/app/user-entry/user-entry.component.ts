import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.less']
})

export class UserEntryComponent implements OnInit {
  @Input() user: User;
  @Output() incScore: EventEmitter<String> = new EventEmitter<String>();
  @Output() decScore: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void { }
  
  // increment score for given user
  addScore(name) {
    this.incScore.emit(name);
  }
  
  // decrement score for given user
  subScore(name) {
    this.decScore.emit(name);
  }
}
