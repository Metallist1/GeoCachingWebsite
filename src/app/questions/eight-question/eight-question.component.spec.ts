import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightQuestionComponent } from './eight-question.component';

describe('EightQuestionComponent', () => {
  let component: EightQuestionComponent;
  let fixture: ComponentFixture<EightQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EightQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
