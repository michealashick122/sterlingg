import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContusComponent } from './contus.component';

describe('ContusComponent', () => {
  let component: ContusComponent;
  let fixture: ComponentFixture<ContusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
