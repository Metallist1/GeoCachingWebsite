import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenQuestionComponent } from './seven-question.component';

describe('SevenQuestionComponent', () => {
  let component: SevenQuestionComponent;
  let fixture: ComponentFixture<SevenQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
