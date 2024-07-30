import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackappComponent } from './trackapp.component';

describe('TrackappComponent', () => {
  let component: TrackappComponent;
  let fixture: ComponentFixture<TrackappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
