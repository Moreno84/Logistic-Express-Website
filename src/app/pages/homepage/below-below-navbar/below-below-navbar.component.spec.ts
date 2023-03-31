import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowBelowNavbarComponent } from './below-below-navbar.component';

describe('BelowBelowNavbarComponent', () => {
  let component: BelowBelowNavbarComponent;
  let fixture: ComponentFixture<BelowBelowNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelowBelowNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelowBelowNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
