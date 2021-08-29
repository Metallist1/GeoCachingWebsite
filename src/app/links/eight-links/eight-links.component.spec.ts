import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightLinksComponent } from './eight-links.component';

describe('EightLinksComponent', () => {
  let component: EightLinksComponent;
  let fixture: ComponentFixture<EightLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EightLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
