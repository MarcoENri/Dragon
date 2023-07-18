import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibilidadComponent } from './flexibilidad.component';

describe('FlexibilidadComponent', () => {
  let component: FlexibilidadComponent;
  let fixture: ComponentFixture<FlexibilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexibilidadComponent]
    });
    fixture = TestBed.createComponent(FlexibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
