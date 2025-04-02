import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyectos-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos-page.component.html',
  styleUrl: './proyectos-page.component.css',
})
export class ProyectosPageComponent {
  isModalOpen: boolean = false;
  videoUrl: SafeResourceUrl;
  videoLiga: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // URL del video de YouTube futbol
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/0j2fgNlc-bw?si=Z6zEoBqOcMy1LZpj'
    );
    this.videoLiga = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/IrkJljILrzQ?si=KlKZCPjFiYX4JeMU'
    );
  }

  // Abrir el modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Cerrar el modal
  closeModal(): void {
    this.isModalOpen = false;
  }
}
