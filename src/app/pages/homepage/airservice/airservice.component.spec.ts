import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirserviceComponent } from './airservice.component';

describe('AirserviceComponent', () => {
  let component: AirserviceComponent;
  let fixture: ComponentFixture<AirserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
