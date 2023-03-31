import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritimeserviceComponent } from './maritimeservice.component';

describe('MaritimeserviceComponent', () => {
  let component: MaritimeserviceComponent;
  let fixture: ComponentFixture<MaritimeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaritimeserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritimeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
