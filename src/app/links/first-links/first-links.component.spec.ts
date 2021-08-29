import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLinksComponent } from './first-links.component';

describe('FirstLinksComponent', () => {
  let component: FirstLinksComponent;
  let fixture: ComponentFixture<FirstLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
