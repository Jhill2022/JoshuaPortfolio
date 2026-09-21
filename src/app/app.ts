import { Component, signal } from '@angular/core';
import { Sidebar } from './component/sidebar/sidebar';
import { Hero } from './component/hero/hero';
import { About } from './component/about/about';
import { Skills } from './component/skills/skills';
import { Projects } from './component/projects/projects';



@Component({
  selector: 'app-root',
  imports: [Sidebar, Hero, About, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('joshua-portfolio');
}
