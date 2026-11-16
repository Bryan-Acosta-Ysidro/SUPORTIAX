import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SERVICIOS } from '../../data/servicios.data';
import { Servicio } from '../../models/servicio.model';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-detail.component.html'
})
export class ServiceDetailComponent {
  private route = inject(ActivatedRoute);

  /** Busca el servicio según el id definido en la ruta (app.routes.ts). */
  servicio: Servicio | undefined = SERVICIOS.find(
    s => s.id === this.route.snapshot.data['servicioId']
  );
}
