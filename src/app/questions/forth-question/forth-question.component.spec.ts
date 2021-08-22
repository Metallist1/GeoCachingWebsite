import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthQuestionComponent } from './forth-question.component';

describe('ForthQuestionComponent', () => {
  let component: ForthQuestionComponent;
  let fixture: ComponentFixture<ForthQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
