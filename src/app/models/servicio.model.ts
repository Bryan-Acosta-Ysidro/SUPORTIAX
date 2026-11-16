export type ServicioId = 'mantenimiento' | 'reparacion' | 'software';

export interface Servicio {
  id: ServicioId;
  nombre: string;
  resumen: string;
  descripcion: string;
  incluye: string[];
  duracion: string;
  precioDesde: string;
  recomendadoPara: string;
}
