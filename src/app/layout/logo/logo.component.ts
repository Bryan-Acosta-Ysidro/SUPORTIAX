import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Logo de Suportiax.
 * El ícono muestra un monitor con una marca de verificación,
 * idea de "soporte técnico confiable".
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logo.component.html'
})
export class LogoComponent {
  /** Versión clara del logo para fondos oscuros (pie de página). */
  @Input() light = false;
}
