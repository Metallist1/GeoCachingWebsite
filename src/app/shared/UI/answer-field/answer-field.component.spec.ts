import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerFieldComponent } from './answer-field.component';

describe('AnswerFieldComponent', () => {
  let component: AnswerFieldComponent;
  let fixture: ComponentFixture<AnswerFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
