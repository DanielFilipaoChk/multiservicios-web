import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBanner {
  readonly whatsappNumber = '573161701112'; // <-- tu número real

  get whatsappLink(): string {
    const text = encodeURIComponent('Hola, quiero información sobre sus servicios');
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }

  scrollToServices() {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }
} 