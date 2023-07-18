import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquilibrioComponent } from './equilibrio.component';

describe('EquilibrioComponent', () => {
  let component: EquilibrioComponent;
  let fixture: ComponentFixture<EquilibrioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquilibrioComponent]
    });
    fixture = TestBed.createComponent(EquilibrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
