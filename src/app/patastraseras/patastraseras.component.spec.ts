import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatastraserasComponent } from './patastraseras.component';

describe('PatastraserasComponent', () => {
  let component: PatastraserasComponent;
  let fixture: ComponentFixture<PatastraserasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatastraserasComponent]
    });
    fixture = TestBed.createComponent(PatastraserasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
