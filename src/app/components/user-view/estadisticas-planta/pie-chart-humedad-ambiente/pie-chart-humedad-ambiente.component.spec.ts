import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartHumedadAmbienteComponent } from './pie-chart-humedad-ambiente.component';

describe('PieChartHumedadAmbienteComponent', () => {
  let component: PieChartHumedadAmbienteComponent;
  let fixture: ComponentFixture<PieChartHumedadAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartHumedadAmbienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartHumedadAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
