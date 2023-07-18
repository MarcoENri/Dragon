import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuernosComponent } from './cuernos.component';

describe('CuernosComponent', () => {
  let component: CuernosComponent;
  let fixture: ComponentFixture<CuernosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuernosComponent]
    });
    fixture = TestBed.createComponent(CuernosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
