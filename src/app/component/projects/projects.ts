import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import {LucideAngularModule, ExternalLink, Github, X } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [NgClass, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  selectedProject: number | null = null;

  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly X = X;

  projects = [
    {
      title: 'E-Commerce Platform',

      description:
        'A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',

      role: 'Lead Full Stack Developer',

      details: [
        'Built scalable microservices architecture handling 10K+ daily transactions',
        'Implemented real-time inventory sync across multiple warehouses',
        'Integrated Stripe payment gateway with fraud detection',
        'Created admin dashboard with advanced analytics and reporting'
      ],

      impact:
        'Reduced checkout time by 40% and increased conversion rate by 25%',

      image:
        'https://images.unsplash.com/photo-1677422516588-9bbdcfd1a31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',

      tags: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Stripe',
        'Redis',
        'AWS'
      ],

      github: 'https://github.com',
      demo: 'https://example.com'
    },

    {
      title: 'Mobile Fitness App',

      description:
        'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',

      role: 'Mobile Developer & UI/UX Designer',

      details: [
        'Designed and developed cross-platform app with React Native',
        'Integrated wearable device APIs for real-time health tracking',
        'Built social features including challenges and leaderboards',
        'Implemented offline-first architecture with data synchronization'
      ],

      impact:
        '100K+ downloads with 4.8★ rating on both iOS and Android',

      image:
        'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',

      tags: [
        'React Native',
        'Firebase',
        'Redux',
        'TypeScript',
        'REST API'
      ],

      github: 'https://github.com',
      demo: 'https://example.com'
    },

    {
      title: 'Analytics Dashboard',

      description:
        'Real-time data visualization dashboard for business intelligence with customizable widgets and reports.',

      role: 'Frontend Architect',

      details: [
        'Created interactive data visualizations with D3.js and Recharts',
        'Implemented drag-and-drop dashboard customization',
        'Built real-time WebSocket connections for live data updates',
        'Developed export functionality for PDF and Excel reports'
      ],

      impact:
        'Empowered teams to make data-driven decisions 3x faster',

      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',

      tags: [
        'Next.js',
        'D3.js',
        'Python',
        'MongoDB',
        'WebSocket'
      ],

      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];


  openProject(index: number): void {
    this.selectedProject = index;
  }


  closeProject(): void {
    this.selectedProject = null;
  }
}
