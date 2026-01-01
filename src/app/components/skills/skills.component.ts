import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-24 transition-colors duration-500"
             [ngClass]="isLight ? 'bg-white' : 'bg-gray-900'">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl md:text-5xl font-black text-center mb-16" 
                [ngClass]="isLight ? 'text-gray-900' : 'text-white'">Key Skills</h2>
            
            <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <!-- Backend Card -->
                <div class="p-8 rounded-2xl shadow-xl border text-center transition-all duration-300"
                     [ngClass]="isLight ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'">
                    <h3 class="text-2xl font-bold mb-6 text-blue-400 border-b border-gray-600 pb-2 inline-block">Backend & Architecture</h3>
                    
                    <div *ngFor="let skill of backendSkills" class="grid grid-cols-[100px_1fr] gap-4 items-baseline mb-3 pb-3 border-b border-gray-500/10 last:border-0">
                        <div class="text-right" [ngClass]="isLight ? 'text-gray-600' : 'text-gray-400'">{{ skill.label }}</div>
                        <div class="text-left font-medium" [ngClass]="isLight ? 'text-gray-800' : 'text-gray-200'">{{ skill.content }}</div>
                    </div>
                </div>

                <!-- Frontend Card -->
                <div class="p-8 rounded-2xl shadow-xl border text-center transition-all duration-300"
                     [ngClass]="isLight ? 'bg-white border-gray-200' : 'bg-gray-800 border-gray-700'">
                    <h3 class="text-2xl font-bold mb-6 text-green-400 border-b border-gray-600 pb-2 inline-block">Frontend, Cloud & DevOps</h3>
                    
                    <div *ngFor="let skill of frontendSkills" class="grid grid-cols-[100px_1fr] gap-4 items-baseline mb-3 pb-3 border-b border-gray-500/10 last:border-0">
                        <div class="text-right" [ngClass]="isLight ? 'text-gray-600' : 'text-gray-400'">{{ skill.label }}</div>
                        <div class="text-left font-medium" [ngClass]="isLight ? 'text-gray-800' : 'text-gray-200'">{{ skill.content }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
})
export class SkillsComponent {
  @Input() isLight = false;

  backendSkills = [
    { label: 'Languages', content: 'Java, Go (Golang), Node.js' },
    { label: 'Frameworks', content: 'Spring Boot, Struts, Spring MVC' },
    { label: 'Data & SQL', content: 'PostgreSQL, Oracle SQL, MongoDB, CouchDB' },
    { label: 'Messaging', content: 'Apache Kafka, RabbitMQ' }
  ];

  frontendSkills = [
    { label: 'Frontend', content: 'Angular, JavaScript' },
    { label: 'Gateway', content: 'KrakenD (API Gateway)' },
    { label: 'DevOps', content: 'Docker, Kubernetes, AWS, GCP, Jenkins' },
    { label: 'Observability', content: 'ELK Stack, Prometheus, Grafana' }
  ];
}
