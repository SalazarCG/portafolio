import { Component } from '@angular/core';
import { ExperienciaLaboralPageComponent } from '../experiencia-laboral-page/experiencia-laboral-page.component';
import { ProyectosPageComponent } from '../proyectos-page/proyectos-page.component';
import { ComponentsComponent } from "../../components/components.component";
import { ImageModule } from 'primeng/image';
import { SobreMiPageComponent } from '../sobre-mi-page/sobre-mi-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal-page',
  imports: [
    RouterOutlet,
    ExperienciaLaboralPageComponent,
    ProyectosPageComponent,
    ComponentsComponent,
    ImageModule,
    SobreMiPageComponent,

  ],
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.css',
})
export default class PrincipalPageComponent {}
