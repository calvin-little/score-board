import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntryComponent } from './user-entry.component';

import { User } from '../user';

describe('UserEntryComponent', () => {
  let component: UserEntryComponent;
  let fixture: ComponentFixture<UserEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEntryComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // Test User content is loaded in page
  it('should correctly render the passed @Input value', () => {
    component.user = <User>{name: 'me', score: 99 };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#me .name').textContent).toBe('Me');
    expect(compiled.querySelector('#me .score-display').textContent).toBe('99 points');
  });

  // Test inc call is passed back with correct string
  it('should correctly @Output value of string in component for incScore()', () => {
    component.user = <User>{name: 'me', score: 0 };
    fixture.detectChanges();
    spyOn(component.incScore, 'emit'); 
	
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(component.incScore.emit).toHaveBeenCalledWith('me'); 
  });

  // Test inc call is passed back with correct string
  it('should correctly @Output value of string in component for decScore()', () => {
    component.user = <User>{name: 'you', score: 2 };
    fixture.detectChanges();
    spyOn(component.decScore, 'emit'); 
	
	// Grab second button ('-')
    const button = fixture.nativeElement.querySelectorAll('button')[1];
    button.click();
    fixture.detectChanges();

    expect(component.decScore.emit).toHaveBeenCalledWith('you'); 
  });

});
