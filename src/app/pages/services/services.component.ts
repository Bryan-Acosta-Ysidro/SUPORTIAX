import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICIOS } from '../../data/servicios.data';
import { ServiceIconComponent } from '../../components/service-icon/service-icon.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, ServiceIconComponent],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  servicios = SERVICIOS;
}
