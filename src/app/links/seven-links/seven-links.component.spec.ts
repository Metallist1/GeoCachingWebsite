import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenLinksComponent } from './seven-links.component';

describe('SevenLinksComponent', () => {
  let component: SevenLinksComponent;
  let fixture: ComponentFixture<SevenLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
