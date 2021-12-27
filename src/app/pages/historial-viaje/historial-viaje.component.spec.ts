import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialViajeComponent } from './historial-viaje.component';

describe('HistorialViajeComponent', () => {
  let component: HistorialViajeComponent;
  let fixture: ComponentFixture<HistorialViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
