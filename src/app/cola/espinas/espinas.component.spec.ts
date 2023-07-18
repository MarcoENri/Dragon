import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspinasComponent } from './espinas.component';

describe('EspinasComponent', () => {
  let component: EspinasComponent;
  let fixture: ComponentFixture<EspinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspinasComponent]
    });
    fixture = TestBed.createComponent(EspinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
