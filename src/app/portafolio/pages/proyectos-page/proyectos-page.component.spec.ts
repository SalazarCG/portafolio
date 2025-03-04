import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosPageComponent } from './proyectos-page.component';

describe('ProyectosPageComponent', () => {
  let component: ProyectosPageComponent;
  let fixture: ComponentFixture<ProyectosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
