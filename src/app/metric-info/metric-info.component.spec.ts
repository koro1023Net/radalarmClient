import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricInfoComponent } from './metric-info.component';

describe('MetricInfoComponent', () => {
  let component: MetricInfoComponent;
  let fixture: ComponentFixture<MetricInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
