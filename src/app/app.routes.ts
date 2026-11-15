import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent, title: 'Suportiax | Inicio' },
  { path: 'servicios', component: ServicesComponent, title: 'Suportiax | Servicios' },
  { path: 'servicios/mantenimiento', component: ServiceDetailComponent, data: { servicioId: 'mantenimiento' }, title: 'Suportiax | Mantenimiento preventivo' },
  { path: 'servicios/reparacion', component: ServiceDetailComponent, data: { servicioId: 'reparacion' }, title: 'Suportiax | Reparación de equipos' },
  { path: 'servicios/software', component: ServiceDetailComponent, data: { servicioId: 'software' }, title: 'Suportiax | Instalación de software' },
  { path: 'nosotros', component: AboutComponent, title: 'Suportiax | Nosotros' },
  { path: 'contacto', component: ContactComponent, title: 'Suportiax | Contacto' },
  { path: '**', redirectTo: 'inicio' }
];
