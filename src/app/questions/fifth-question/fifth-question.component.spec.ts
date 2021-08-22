import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthQuestionComponent } from './fifth-question.component';

describe('FifthQuestionComponent', () => {
  let component: FifthQuestionComponent;
  let fixture: ComponentFixture<FifthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
