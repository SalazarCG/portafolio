import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components-backend.component.html',
  imports: [RouterModule],
  styleUrls: ['./components-backend.component.css'],
})
export class ComponentsBackendComponent implements OnInit {
  public goToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  isMenuVisible: boolean = false;

  ngOnInit(): void {
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  handleOutsideClick(event: Event): void {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themesMenu = document.getElementById('themes-menu');
    if (
      themeToggleBtn &&
      themesMenu &&
      !themeToggleBtn.contains(event.target as Node) &&
      !themesMenu.contains(event.target as Node)
    ) {
      this.isMenuVisible = false;
    }
  }

  setTheme(theme: string): void {
    const htmlElement = document.documentElement;
    if (theme === 'Claro') {
      htmlElement.classList.remove('dark');
    } else if (theme === 'Oscuro') {
      htmlElement.classList.add('dark');
    }
    this.isMenuVisible = false;
  }
}
