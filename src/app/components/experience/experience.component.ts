import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-24 transition-colors duration-500"
             [ngClass]="isLight ? 'bg-gray-50' : 'bg-gray-800'">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl md:text-5xl font-black text-center mb-16" 
                [ngClass]="isLight ? 'text-gray-900' : 'text-white'">Professional Experience</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                
                <!-- Experience Cards Loop -->
                <div *ngFor="let job of jobs" class="p-8 rounded-2xl shadow-xl border text-center transition-all duration-300"
                     [ngClass]="isLight ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'">
                    
                    <h3 class="text-xl font-bold mb-3" 
                        [ngClass]="job.type === 'green' ? 'text-emerald-400' : 'text-blue-400'">{{ job.title }}</h3>
                    
                    <div class="mb-4 flex flex-wrap gap-1.5 justify-center">
                        <span *ngFor="let tech of job.stack" 
                              class="text-xs px-2 py-1 rounded-full border font-semibold"
                              [ngClass]="isLight ? 'text-blue-800 bg-blue-100 border-blue-200' : 'text-blue-300 bg-blue-900/40 border-blue-900/50'">
                            {{ tech }}
                        </span>
                    </div>

                    <ul class="space-y-2 text-left list-disc list-inside text-sm leading-relaxed max-w-md mx-auto"
                        [ngClass]="isLight ? 'text-gray-700' : 'text-gray-300'">
                        <li *ngFor="let point of job.points">{{ point }}</li>
                    </ul>
                </div>

                <!-- Education Card (Fixed Theme Logic) -->
                <div class="p-8 rounded-2xl shadow-xl border md:col-span-2 lg:col-span-1 flex flex-col justify-center text-center transition-all duration-300"
                     [ngClass]="isLight ? 'bg-white border-gray-200' : 'bg-gradient-to-br from-emerald-900/80 to-emerald-800/50 border-emerald-600/50'">
                    
                    <h3 class="text-xl font-bold mb-4 border-b pb-3 inline-block mx-auto"
                        [ngClass]="isLight ? 'text-emerald-600 border-emerald-200' : 'text-emerald-400 border-emerald-500/50'">Education</h3>
                    
                    <div>
                        <p class="text-2xl md:text-3xl font-black mb-2 drop-shadow-lg"
                           [ngClass]="isLight ? 'text-gray-900' : 'text-white'">B.Tech ECE</p>
                        <p class="text-lg font-semibold mb-3"
                           [ngClass]="isLight ? 'text-emerald-800' : 'text-emerald-100'">The LNM Institute of Information Technology</p>
                        <p class="font-medium text-lg"
                           [ngClass]="isLight ? 'text-emerald-700' : 'text-emerald-200'">2016 – 2020</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `
})
export class ExperienceComponent {
  @Input() isLight = false;

  jobs = [
    {
      title: 'Digital Customer Onboarding',
      stack: ['Spring Boot', 'Angular', 'PostgreSQL', 'RabbitMQ', 'GCP', 'KrakenD'],
      points: [
        'Architected highly scalable fintech platform for digital onboarding & money transfers',
        'Integrated national switch platform & mobile clearing systems',
        'Implemented vault management & biometric auth for compliance',
        'Led security automation & manual effort reduction initiatives'
      ]
    },
    {
      title: 'Payment Ecosystem Integration',
      stack: ['Mule', 'Kafka', 'MongoDB', 'Prometheus', 'AWS'],
      points: [
        'Integrated diverse ecosystem: banks, billers, loan providers',
        'Implemented AML, CRM tools, and loyalty programs',
        '25% operational efficiency gain via automation',
        'End-to-end delivery with on-site client training'
      ]
    },
    {
      title: 'Wallet & Merchant Services',
      stack: ['Java', 'Struts', 'Node.js', 'SQL', 'JMeter'],
      points: [
        'Developed wallet core for 14 countries (Merchants/Recharge)',
        'Remediated critical Log4j vulnerability (Day Zero)',
        'Executed complex currency reform & numbering plan migrations'
      ]
    },
    {
      title: 'API Gateway & Microservices',
      type: 'green',
      stack: ['KrakenD', 'Spring Cloud', 'Docker', 'ELK Stack'],
      points: [
        'Designed high-performance API Gateway strategies',
        'Microservices orchestration & distributed tracing',
        'Containerization (Docker) & CI/CD pipeline optimization',
        'Performance tuning for high-traffic payment gateways'
      ]
    }
  ];
}
