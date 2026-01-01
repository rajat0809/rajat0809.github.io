import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-20 transition-colors duration-500"
             [ngClass]="isLight ? 'bg-gradient-to-br from-gray-50 to-blue-50' : 'bg-gradient-to-br from-blue-900 via-gray-900 to-black'">
        <div class="flex flex-col items-center text-center max-w-4xl w-full">
            
            <div class="inline-flex flex-wrap justify-center items-center gap-2 mb-8 px-4 py-2 bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl backdrop-blur-xl">
                <span class="status-badge text-xs font-bold px-3 py-1 rounded-full text-white shadow-lg whitespace-nowrap">OPEN FOR WORK</span>
                <span class="text-sm font-semibold" [ngClass]="isLight ? 'text-blue-800' : 'text-blue-200'">Full-Time • Contract • Tech Consulting</span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-black mb-6 hero-name drop-shadow-2xl tracking-tight">Rajat Chandak</h1>
            
            <p class="text-2xl md:text-3xl font-bold mb-6" [ngClass]="isLight ? 'text-gray-800' : 'text-gray-100'">
                Senior Full Stack Developer & Consultant
            </p>
            
            <p class="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" [ngClass]="isLight ? 'text-gray-700' : 'text-gray-300'">
                5+ years architecting scalable fintech solutions. Expert in <strong>Java, Go, Angular & Cloud Architecture</strong>.
                <br>Available for <strong class="text-blue-600">Senior Engineering roles</strong> or <strong class="text-emerald-600">Expert Tech Consulting</strong>.
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-6 w-full">
                <a href="#contact" class="hire-btn inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-bold border-2 border-blue-400/30 shadow-lg transition-transform hover:-translate-y-1">
                    🚀 Hire Me (Full-Time)
                </a>
                <a href="#contact" class="consult-btn inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-10 py-5 rounded-2xl text-xl font-bold border-2 border-emerald-400/30 shadow-lg transition-transform hover:-translate-y-1">
                    💼 Consulting / Contract
                </a>
            </div>
        </div>
    </section>
  `
})
export class HeroComponent {
  @Input() isLight = false;
}
