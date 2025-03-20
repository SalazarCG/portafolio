import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-proyectos-page',
  imports: [ CommonModule],
  templateUrl: './proyectos-page.component.html',
  styleUrl: './proyectos-page.component.css',
})
export class ProyectosPageComponent {
  isVideoVisible: boolean = false;

  toggleVideoVisibility() {
    this.isVideoVisible = !this.isVideoVisible;
  }
}
