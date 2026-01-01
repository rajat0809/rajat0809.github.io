import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="p-4 sticky top-0 z-40 shadow-xl backdrop-blur-md transition-all duration-500 border-b"
         [ngClass]="isLight ? 'bg-white/95 border-gray-200' : 'bg-gray-800/95 border-gray-700'">
        <ul class="flex space-x-4 md:space-x-8 justify-center flex-wrap">
            <li *ngFor="let link of links">
                <a [href]="link.href" 
                   class="nav-link px-3 py-2 rounded-lg transition-colors font-medium"
                   [ngClass]="isLight ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-blue-400'">
                   {{ link.label }}
                </a>
            </li>
        </ul>
    </nav>
  `
})
export class NavbarComponent {
  @Input() isLight = false;
  
  links = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];
}
