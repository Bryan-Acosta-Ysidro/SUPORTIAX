import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICIOS } from '../../data/servicios.data';
import { ServiceIconComponent } from '../../components/service-icon/service-icon.component';
import { ConsejosComponent } from '../../components/consejos/consejos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ServiceIconComponent, ConsejosComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  servicios = SERVICIOS;

  pasos = [
    { titulo: 'Envías tu solicitud', detalle: 'Nos cuentas qué le pasa a tu equipo desde el formulario.' },
    { titulo: 'Coordinamos contigo', detalle: 'Te escribimos para acordar el día de recepción o visita.' },
    { titulo: 'Diagnóstico y presupuesto', detalle: 'Revisamos el equipo y te explicamos el costo antes de trabajar.' },
    { titulo: 'Entrega probada', detalle: 'Te entregamos el equipo funcionando y con recomendaciones.' }
  ];
}
