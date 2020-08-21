import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { UserEntryComponent } from './user-entry/user-entry.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ScoreBoardComponent,
        UserEntryComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
