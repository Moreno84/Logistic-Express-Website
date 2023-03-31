import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelowNavbarComponent } from './below-navbar.component';

describe('BelowNavbarComponent', () => {
  let component: BelowNavbarComponent;
  let fixture: ComponentFixture<BelowNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelowNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelowNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
