import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAllComponent } from './nav-all.component';

describe('NavAllComponent', () => {
  let component: NavAllComponent;
  let fixture: ComponentFixture<NavAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
