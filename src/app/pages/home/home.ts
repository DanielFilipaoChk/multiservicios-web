import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import {
  LucideAngularModule,
  Hammer,
  Sun,
  Bike,
  KeyRound,
  Key,
  Send,
  Car,
  Wrench,
  Zap,
  ShieldCheck,
  HardHat,
  Wine,
  type LucideIconData,
} from 'lucide-angular';

import { Service } from '../../interfaces/service.interface';
import { ServiciosDataService } from '../../services/firebase/servicios-data.service';
import { Header } from '../../components/header/header';
import { HeroBanner } from '../../components/hero-banner/hero-banner';
import { ServiceModal } from '../../components/service-modal/service-modal';

const ICON_MAP: Record<string, LucideIconData> = {
  Hammer,
  Sun,
  Bike,
  KeyRound,
  Key,
  Send,
  Car,
  Wrench,
  Zap,
  ShieldCheck,
  HardHat,
  Wine,
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, Header, HeroBanner, LucideAngularModule, ServiceModal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private serviciosDataService = inject(ServiciosDataService);
  services$: Observable<Service[]> = this.serviciosDataService.getServices();
  selectedService: Service | null = null;

  readonly whatsappNumber = '573161701112';

  searchTerm = '';
  onSearch(term: string) {
    this.searchTerm = term;
  }

  getIcon(iconName: string): LucideIconData {
    return ICON_MAP[iconName] || Hammer; // ícono por defecto si no coincide
  }

  getWhatsappLink(service: Service): string {
    const message =
      service.whatsappMessage || `Hola, quiero solicitar el servicio de ${service.name}`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  openDetails(service: Service) {
    this.selectedService = service;
  }

  closeDetails() {
    this.selectedService = null;
  }
}
