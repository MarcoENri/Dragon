import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpliaEnvergaduraComponent } from './amplia-envergadura.component';

describe('AmpliaEnvergaduraComponent', () => {
  let component: AmpliaEnvergaduraComponent;
  let fixture: ComponentFixture<AmpliaEnvergaduraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmpliaEnvergaduraComponent]
    });
    fixture = TestBed.createComponent(AmpliaEnvergaduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
