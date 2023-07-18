import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlasComponent } from './alas.component';

describe('AlasComponent', () => {
  let component: AlasComponent;
  let fixture: ComponentFixture<AlasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlasComponent]
    });
    fixture = TestBed.createComponent(AlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
