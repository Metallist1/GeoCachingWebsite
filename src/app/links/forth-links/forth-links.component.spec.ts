import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthLinksComponent } from './forth-links.component';

describe('ForthLinksComponent', () => {
  let component: ForthLinksComponent;
  let fixture: ComponentFixture<ForthLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
