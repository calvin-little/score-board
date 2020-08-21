import { Component, OnInit } from '@angular/core';

import { USERS } from '../users';

@Component({
  selector: 'score-board',
  template: '<user-entry [user]="user" (incScore)="addScore($event)" (decScore)="subScore($event)" *ngFor="let user of users"></user-entry>',
  styleUrls: ['./score-board.component.less']
})

export class ScoreBoardComponent implements OnInit {
  
  constructor() { }

  users = USERS;

  ngOnInit(): void {
    // Sort initial user list
    this.sortScoreBoard();
  }

  // increase a users score and resort list
  addScore(name) {
    let user = this.users.find(user => user.name === name);
    user.score += 1
    
    // Trigger resort
    this.sortScoreBoard();
  }

  // Decrease a users score and resort list
  subScore(name) {
    let user = this.users.find(user => user.name === name);
    
    // Zero is minimum score
    if (0 < user.score) {
      user.score -= 1;
    }
    
    // Trigger resort
    this.sortScoreBoard();
  }
  
  // Resort the current users array
  sortScoreBoard() {
    return this.users.sort((a, b) => {
      // Primary sorting for highest score at top
      const scoreDiff = b.score - a.score;
      // Secondary sorting by ascending names
      const nameDiff = (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
      
      return <number>(scoreDiff !== 0 ? scoreDiff : nameDiff) ;
    });
  }
}