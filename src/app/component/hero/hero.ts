import { Component } from '@angular/core';
import { ArrowDown, Download, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
readonly Download = Download;
readonly ArrowDown = ArrowDown;
}
