import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosBackendComponent } from './proyectos-backend.component';

describe('ProyectosBackendComponent', () => {
  let component: ProyectosBackendComponent;
  let fixture: ComponentFixture<ProyectosBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosBackendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
