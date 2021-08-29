import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLinksComponent } from './third-links.component';

describe('ThirdLinksComponent', () => {
  let component: ThirdLinksComponent;
  let fixture: ComponentFixture<ThirdLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
