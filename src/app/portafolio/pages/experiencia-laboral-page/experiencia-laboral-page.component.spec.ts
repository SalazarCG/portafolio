import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaLaboralPageComponent } from './experiencia-laboral-page.component';

describe('ExperienciaLaboralPageComponent', () => {
  let component: ExperienciaLaboralPageComponent;
  let fixture: ComponentFixture<ExperienciaLaboralPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienciaLaboralPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaLaboralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
