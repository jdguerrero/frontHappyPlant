import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPlantaComponent } from './registrar-planta.component';

describe('RegistrarPlantaComponent', () => {
  let component: RegistrarPlantaComponent;
  let fixture: ComponentFixture<RegistrarPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
