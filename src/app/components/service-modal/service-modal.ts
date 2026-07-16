import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, Clock3, CircleCheckBig } from 'lucide-angular';

import { Service } from '../../interfaces/service.interface';

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './service-modal.html',
  styleUrl: './service-modal.css',
})
export class ServiceModal {

  @Input() service: Service | null = null;

  @Output() close = new EventEmitter<void>();

  readonly XIcon = X;
  readonly ClockIcon = Clock3;
  readonly CheckIcon = CircleCheckBig;

  closeModal() {
    this.close.emit();
  }

  getWhatsappLink(): string {

  if (!this.service) {
    return '#';
  }

  return `https://wa.me/573161701112?text=${encodeURIComponent(
    this.service.whatsappMessage
  )}`;

}

}