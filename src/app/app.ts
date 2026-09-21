import { Component, signal } from '@angular/core';
import { Sidebar } from './component/sidebar/sidebar';
import { Hero } from './component/hero/hero';
import { About } from './component/about/about';


@Component({
  selector: 'app-root',
  imports: [Sidebar, Hero, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('joshua-portfolio');
}
