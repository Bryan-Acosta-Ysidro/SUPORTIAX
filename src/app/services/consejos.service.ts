import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consejo } from '../models/consejo.model';

/**
 * Servicio que obtiene los consejos de cuidado mediante una petición HTTP GET.
 * Por ahora la respuesta se encuentra en public/data/consejos.json;
 * cuando exista el backend, solo se cambia la URL por la del endpoint real.
 */
@Injectable({ providedIn: 'root' })
export class ConsejosService {
  private http = inject(HttpClient);
  private readonly url = 'data/consejos.json';

  listar(): Observable<Consejo[]> {
    return this.http.get<Consejo[]>(this.url);
  }
}
