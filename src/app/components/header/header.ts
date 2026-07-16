import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly SearchIcon = Search;
  readonly WhatsappIcon = MessageCircle;

  searchTerm = '';

  @Output() search = new EventEmitter<string>();

  onSearchChange(value: string) {
    this.searchTerm = value;
    this.search.emit(value);
  }

  readonly whatsappNumber = '573161701112'; // <-- tu número real
  get whatsappGeneralLink(): string {
    const text = encodeURIComponent('Hola, quiero información sobre sus servicios');
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }
}