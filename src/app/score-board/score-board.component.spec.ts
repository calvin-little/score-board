import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBoardComponent } from './score-board.component';

import { User } from '../user';

describe('ScoreBoardComponent', () => {
  let component: ScoreBoardComponent;
  let fixture: ComponentFixture<ScoreBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreBoardComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  describe('Testing user score modification and order sorting', () => {
	let app: ScoreBoardComponent;
	let name1: string;
	let name2: string;
	let name3: string;
	let name4: string;
	let name5: string;

	beforeEach(() => {
	  app = new ScoreBoardComponent();
	  name1 = 'emma';
	  name2 = 'william';
	  name3 = 'olivia';
	  name4 = 'james';
	  name5 = 'noah';
	});

  // Test inc call is passed back with correct string
  //TODO: use mock Users list
    it('should increment user score', () => {
	  let user1 = app.users.find(user => user.name === name1);
	  let user2 = app.users.find(user => user.name === name2);
	  user1.score = 0;
	  user2.score = 0;
	  app.addScore(name1);
	  app.addScore(name1);
	  expect(user1.score).toBe(2);
	  expect(user2.score).toBe(0);
	});

    // Test inc call is passed back with correct string
    //TODO: use mock Users list
    it('should decrement user score', () => {
	  let user1 = app.users.find(user => user.name === name1);
	  let user2 = app.users.find(user => user.name === name2);
	  // Subbing at 0 should stay at 0
	  user1.score = 0;
	  app.subScore(name1);
	  expect(user1.score).toBe(0);
	  
	  // sub from 100 to 99
	  user2.score = 100;
	  app.subScore(name2);	  
	  expect(user2.score).toBe(99);
	});
	
	it ('should sort by score and name', () => {
	  let user1 = app.users.find(user => user.name === name1);
	  let user2 = app.users.find(user => user.name === name2);
	  let user3 = app.users.find(user => user.name === name3);
	  
	  // Set to same score to test correct order
	  user1.score = 100;
	  user2.score = 100;
	  // Set to higher score to take sole first place
	  user3.score = 101;
	  
	  app.sortScoreBoard();
	
	  // Get user order after sorting
	  let names = app.users.map(({ name }) => name);
	  expect(names).toEqual([name3, name1, name2, name4, name5]);
	});
  });
});
