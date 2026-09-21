import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideAngularModule, Code, Database, Palette, Globe, Zap, Layers } from 'lucide-angular';

@Component({
  selector: 'app-skills',
  imports: [NgClass, LucideAngularModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly Code = Code;
  readonly Database = Database;
  readonly Palette = Palette;
  readonly Globe = Globe;
  readonly Zap = Zap;
  readonly Layers = Layers;

skills = [
    {
      name: 'React & TypeScript',
      icon: Palette,
      where: 'E-Commerce Platform Frontend',
      problem:
        'Built a complex product catalog with real-time filtering and search, handling thousands of SKUs while maintaining 60fps performance',
      color: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400'
      }
    },
    {
      name: 'Node.js & Express',
      icon: Code,
      where: 'Payment Processing Service',
      problem:
        'Developed a microservice handling 10K+ concurrent transactions with 99.9% uptime and sub-200ms response times',
      color: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400'
      }
    },
    {
      name: 'PostgreSQL',
      icon: Database,
      where: 'Analytics Dashboard Backend',
      problem:
        'Optimized complex queries across 50M+ records, reducing report generation time from 45s to 3s through proper indexing and query optimization',
      color: {
        bg: 'bg-indigo-500/10',
        border: 'border-indigo-500/30',
        text: 'text-indigo-400'
      }
    },
    {
      name: 'AWS & Docker',
      icon: Globe,
      where: 'Multi-tenant SaaS Infrastructure',
      problem:
        'Architected containerized deployment reducing infrastructure costs by 40% while improving scalability and deployment speed',
      color: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400'
      }
    },
    {
      name: 'Next.js & SSR',
      icon: Zap,
      where: 'High-Traffic Marketing Site',
      problem:
        'Implemented server-side rendering and static generation, improving SEO rankings and reducing page load time from 4.5s to 1.2s',
      color: {
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400'
      }
    },
    {
      name: 'MongoDB & Redis',
      icon: Layers,
      where: 'Real-time Chat Application',
      problem:
        'Designed caching strategy and data model supporting 100K+ concurrent users with instant message delivery and conversation history',
      color: {
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/30',
        text: 'text-pink-400'
      }
    },
    {
      name: 'Python & FastAPI',
      icon: Code,
      where: 'Machine Learning API Service',
      problem:
        'Created REST API for ML model inference, processing 1M+ predictions daily with automatic scaling and error handling',
      color: {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        text: 'text-orange-400'
      }
    },
    {
      name: 'GraphQL',
      icon: Database,
      where: 'Mobile App Backend',
      problem:
        'Replaced multiple REST endpoints with a single GraphQL API, reducing mobile data usage by 60% and improving app responsiveness',
      color: {
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/30',
        text: 'text-teal-400'
      }
    }
  ];

}
