import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuelloComponent } from './cuello.component';

describe('CuelloComponent', () => {
  let component: CuelloComponent;
  let fixture: ComponentFixture<CuelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuelloComponent]
    });
    fixture = TestBed.createComponent(CuelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
