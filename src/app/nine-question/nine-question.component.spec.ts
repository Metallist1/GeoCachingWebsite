import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineQuestionComponent } from './nine-question.component';

describe('NineQuestionComponent', () => {
  let component: NineQuestionComponent;
  let fixture: ComponentFixture<NineQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NineQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NineQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
