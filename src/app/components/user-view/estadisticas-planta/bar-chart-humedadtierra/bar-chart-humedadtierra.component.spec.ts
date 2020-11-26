import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartHumedadtierraComponent } from './bar-chart-humedadtierra.component';

describe('BarChartHumedadtierraComponent', () => {
  let component: BarChartHumedadtierraComponent;
  let fixture: ComponentFixture<BarChartHumedadtierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartHumedadtierraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartHumedadtierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
