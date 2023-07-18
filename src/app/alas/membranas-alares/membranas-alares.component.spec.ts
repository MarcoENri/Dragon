import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembranasAlaresComponent } from './membranas-alares.component';

describe('MembranasAlaresComponent', () => {
  let component: MembranasAlaresComponent;
  let fixture: ComponentFixture<MembranasAlaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembranasAlaresComponent]
    });
    fixture = TestBed.createComponent(MembranasAlaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
