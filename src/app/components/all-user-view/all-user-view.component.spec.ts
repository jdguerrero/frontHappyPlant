import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserViewComponent } from './all-user-view.component';

describe('AllUserViewComponent', () => {
  let component: AllUserViewComponent;
  let fixture: ComponentFixture<AllUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
