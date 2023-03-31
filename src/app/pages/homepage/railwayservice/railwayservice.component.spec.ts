import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayserviceComponent } from './railwayservice.component';

describe('RailwayserviceComponent', () => {
  let component: RailwayserviceComponent;
  let fixture: ComponentFixture<RailwayserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailwayserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RailwayserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
