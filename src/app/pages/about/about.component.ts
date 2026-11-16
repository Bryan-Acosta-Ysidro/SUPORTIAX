import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  valores = [
    { nombre: 'Transparencia', detalle: 'Explicamos la falla y el costo antes de trabajar en el equipo.' },
    { nombre: 'Responsabilidad', detalle: 'Cumplimos los plazos acordados y cuidamos la información del cliente.' },
    { nombre: 'Cercanía', detalle: 'Usamos un lenguaje sencillo, sin tecnicismos innecesarios.' }
  ];
}
