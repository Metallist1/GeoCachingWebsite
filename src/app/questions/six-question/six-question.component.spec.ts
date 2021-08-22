import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixQuestionComponent } from './six-question.component';

describe('SixQuestionComponent', () => {
  let component: SixQuestionComponent;
  let fixture: ComponentFixture<SixQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
