import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthLinksComponent } from './fifth-links.component';

describe('FifthLinksComponent', () => {
  let component: FifthLinksComponent;
  let fixture: ComponentFixture<FifthLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
