import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbelowNavbarComponent } from './bbelow-navbar.component';

describe('BbelowNavbarComponent', () => {
  let component: BbelowNavbarComponent;
  let fixture: ComponentFixture<BbelowNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbelowNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbelowNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
