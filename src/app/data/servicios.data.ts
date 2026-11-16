import { Servicio } from '../models/servicio.model';

/** Catálogo de servicios que ofrece Suportiax. */
export const SERVICIOS: Servicio[] = [
  {
    id: 'mantenimiento',
    nombre: 'Mantenimiento preventivo',
    resumen: 'Limpieza interna, cambio de pasta térmica y revisión general para que tu equipo no se caliente ni se vuelva lento.',
    descripcion: 'Revisamos tu computadora o laptop por dentro y por fuera para evitar fallas antes de que aparezcan. Es el servicio ideal si tu equipo se calienta, hace mucho ruido o ya pasó más de un año sin mantenimiento.',
    incluye: [
      'Limpieza de polvo en ventiladores, disipador y puertos.',
      'Cambio de pasta térmica del procesador.',
      'Revisión del estado del disco y de la batería.',
      'Limpieza de archivos temporales y programas de inicio.',
      'Reporte con el estado del equipo y recomendaciones.'
    ],
    duracion: '2 a 3 horas',
    precioDesde: 'Desde S/ 70',
    recomendadoPara: 'Cada 6 a 12 meses o cuando el equipo se calienta.'
  },
  {
    id: 'reparacion',
    nombre: 'Reparación de equipos',
    resumen: 'Diagnóstico y reparación de fallas de hardware y software en computadoras y laptops.',
    descripcion: 'Identificamos la causa de la falla y te explicamos qué tiene tu equipo antes de hacer cualquier trabajo. Solo reparamos después de que apruebes el presupuesto.',
    incluye: [
      'Diagnóstico de la falla en un plazo de 24 horas.',
      'Presupuesto detallado para tu aprobación.',
      'Cambio de pantalla, teclado, disco, memoria RAM o batería.',
      'Recuperación del sistema cuando el equipo no inicia.',
      'Prueba de funcionamiento antes de la entrega.'
    ],
    duracion: 'Según la falla; el diagnóstico toma hasta 24 horas',
    precioDesde: 'Diagnóstico desde S/ 40',
    recomendadoPara: 'Equipos que no encienden, se apagan solos o muestran pantalla azul.'
  },
  {
    id: 'software',
    nombre: 'Instalación de software',
    resumen: 'Instalación del sistema operativo, programas de oficina, antivirus e impresoras.',
    descripcion: 'Dejamos tu equipo listo para trabajar o estudiar. Antes de formatear respaldamos tus documentos, e instalamos solo programas gratuitos o con licencia del cliente.',
    incluye: [
      'Instalación o reinstalación de Windows con sus controladores.',
      'Programas de oficina, navegadores y lector de PDF.',
      'Configuración de antivirus y actualizaciones automáticas.',
      'Respaldo de documentos antes de formatear.',
      'Configuración de impresora y red wifi.'
    ],
    duracion: '1 a 3 horas',
    precioDesde: 'Desde S/ 50',
    recomendadoPara: 'Equipos nuevos, lentos o que necesitan formatearse.'
  }
];
