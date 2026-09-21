import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import {
  LucideAngularModule,
  Github,
  Linkedin,
  Mail,
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Download
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [LucideAngularModule, NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  activeSection = 'home';

  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Home = Home;
  readonly User = User;
  readonly Code = Code;
  readonly Briefcase = Briefcase;
  readonly MessageSquare = MessageSquare;
  readonly Download = Download;

  handleNavClick(id: string): void {
    this.activeSection = id;

    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
