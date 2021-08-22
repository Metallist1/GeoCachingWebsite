import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdQuestionComponent } from './third-question.component';

describe('ThirdQuestionComponent', () => {
  let component: ThirdQuestionComponent;
  let fixture: ComponentFixture<ThirdQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
