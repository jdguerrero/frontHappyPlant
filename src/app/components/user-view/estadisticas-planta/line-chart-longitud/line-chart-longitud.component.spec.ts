import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartLongitudComponent } from './line-chart-longitud.component';

describe('LineChartLongitudComponent', () => {
  let component: LineChartLongitudComponent;
  let fixture: ComponentFixture<LineChartLongitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartLongitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartLongitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
