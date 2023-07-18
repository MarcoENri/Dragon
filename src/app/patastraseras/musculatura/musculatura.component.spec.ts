import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusculaturaComponent } from './musculatura.component';

describe('MusculaturaComponent', () => {
  let component: MusculaturaComponent;
  let fixture: ComponentFixture<MusculaturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusculaturaComponent]
    });
    fixture = TestBed.createComponent(MusculaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
