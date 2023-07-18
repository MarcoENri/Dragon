import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscamasProtectorasComponent } from './escamas-protectoras.component';

describe('EscamasProtectorasComponent', () => {
  let component: EscamasProtectorasComponent;
  let fixture: ComponentFixture<EscamasProtectorasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscamasProtectorasComponent]
    });
    fixture = TestBed.createComponent(EscamasProtectorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
