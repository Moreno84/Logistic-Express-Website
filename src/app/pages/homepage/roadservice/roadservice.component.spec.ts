import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadserviceComponent } from './roadservice.component';

describe('RoadserviceComponent', () => {
  let component: RoadserviceComponent;
  let fixture: ComponentFixture<RoadserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
