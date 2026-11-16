import { Component, Input } from '@angular/core';
import { ServicioId } from '../../models/servicio.model';

/** Ícono de cada servicio (dibujado en SVG para no depender de imágenes). */
@Component({
  selector: 'app-service-icon',
  standalone: true,
  template: `
    <span class="card-icon" aria-hidden="true">
      @switch (tipo) {
        @case ('mantenimiento') {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" />
          </svg>
        }
        @case ('reparacion') {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        }
        @case ('software') {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M10 9l-2 2 2 2M14 9l2 2-2 2" />
          </svg>
        }
      }
    </span>
  `
})
export class ServiceIconComponent {
  @Input({ required: true }) tipo!: ServicioId;
}
