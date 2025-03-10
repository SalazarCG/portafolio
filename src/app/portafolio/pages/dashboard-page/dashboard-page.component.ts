import { Component } from '@angular/core';
import { ExperienciaLaboralPageComponent } from '../experiencia-laboral-page/experiencia-laboral-page.component';
import { ProyectosPageComponent } from '../proyectos-page/proyectos-page.component';
import { ComponentsComponent } from "../../components/components.component";
import { ImageModule } from 'primeng/image';
import { SobreMiPageComponent } from '../sobre-mi-page/sobre-mi-page.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [
    ExperienciaLaboralPageComponent,
    ProyectosPageComponent,
    ComponentsComponent,
    ImageModule,
    SobreMiPageComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export default class DashboardPageComponent {}
