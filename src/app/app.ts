import { Component, signal } from '@angular/core';
import { Sidebar } from './component/sidebar/sidebar';
import { Hero } from './component/hero/hero';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('joshua-portfolio');
}
