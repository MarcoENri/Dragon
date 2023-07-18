import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortalezaComponent } from './fortaleza.component';

describe('FortalezaComponent', () => {
  let component: FortalezaComponent;
  let fixture: ComponentFixture<FortalezaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortalezaComponent]
    });
    fixture = TestBed.createComponent(FortalezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
