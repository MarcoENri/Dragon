import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarrasComponent } from './garras.component';

describe('GarrasComponent', () => {
  let component: GarrasComponent;
  let fixture: ComponentFixture<GarrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarrasComponent]
    });
    fixture = TestBed.createComponent(GarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
