import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLinksComponent } from './second-links.component';

describe('SecondLinksComponent', () => {
  let component: SecondLinksComponent;
  let fixture: ComponentFixture<SecondLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
