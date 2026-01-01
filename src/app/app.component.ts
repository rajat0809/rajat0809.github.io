import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, SkillsComponent, ExperienceComponent, ContactComponent],
  template: `
    <!-- Main Container with Theme Binding -->
    <div [class.light-theme]="isLightTheme()" class="min-h-screen transition-colors duration-500">
      
      <!-- Theme Toggle Button -->
      <button (click)="toggleTheme()" 
              class="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-2xl flex items-center justify-center text-3xl transition-transform duration-300 hover:scale-110 active:scale-95 border-4 border-white/20 cursor-pointer"
              aria-label="Toggle Theme">
        <span>{{ isLightTheme() ? '🌙' : '☀️' }}</span>
      </button>

      <!-- Navigation Bar -->
      <app-navbar [isLight]="isLightTheme()"></app-navbar>
      
      <!-- Main Content Sections -->
      <main>
        <app-hero [isLight]="isLightTheme()"></app-hero>
        <app-skills [isLight]="isLightTheme()"></app-skills>
        <app-experience [isLight]="isLightTheme()"></app-experience>
        <app-contact [isLight]="isLightTheme()"></app-contact>
      </main>

    </div>
  `
})
export class AppComponent {
  // Signal to manage theme state (true = light mode, false = dark mode)
  isLightTheme = signal(false);

  toggleTheme() {
    this.isLightTheme.update(val => !val);
  }
}
