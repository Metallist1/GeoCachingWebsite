import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixLinksComponent } from './six-links.component';

describe('SixLinksComponent', () => {
  let component: SixLinksComponent;
  let fixture: ComponentFixture<SixLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
