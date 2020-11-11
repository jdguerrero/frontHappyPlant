import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualPlantaComponent } from './actual-planta.component';

describe('ActualPlantaComponent', () => {
  let component: ActualPlantaComponent;
  let fixture: ComponentFixture<ActualPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
