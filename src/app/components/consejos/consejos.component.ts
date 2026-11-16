import { Component, OnInit, inject } from '@angular/core';
import { ConsejosService } from '../../services/consejos.service';
import { Consejo } from '../../models/consejo.model';

@Component({
  selector: 'app-consejos',
  standalone: true,
  templateUrl: './consejos.component.html'
})
export class ConsejosComponent implements OnInit {
  private consejosService = inject(ConsejosService);

  consejos: Consejo[] = [];
  cargando = true;
  error = false;

  ngOnInit(): void {
    this.consejosService.listar().subscribe({
      next: datos => {
        this.consejos = datos;
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }
}
