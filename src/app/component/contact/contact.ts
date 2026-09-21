import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
} from 'lucide-angular'
@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly Mail = Mail;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly MapPin = MapPin;
  readonly Phone = Phone;
}
