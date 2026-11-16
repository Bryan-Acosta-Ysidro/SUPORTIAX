import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SERVICIOS } from '../../data/servicios.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);

  servicios = SERVICIOS;
  tiposEquipo = ['Laptop', 'Computadora de escritorio', 'Todo en uno'];
  readonly maxMensaje = 500;

  /** Nombre de la persona que envió la solicitud (para el mensaje de confirmación). */
  enviadoPor = signal<string | null>(null);

  form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    correo: ['', [Validators.required, Validators.email]],
    celular: ['', [Validators.required, Validators.pattern(/^9\d{8}$/)]],
    tipoEquipo: ['', Validators.required],
    servicio: ['', Validators.required],
    mensaje: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(this.maxMensaje)]],
    consentimiento: [false, Validators.requiredTrue]
  });

  ngOnInit(): void {
    // Si el usuario llega desde el detalle de un servicio, se preselecciona.
    const servicio = this.route.snapshot.queryParamMap.get('servicio');
    if (servicio && this.servicios.some(s => s.id === servicio)) {
      this.form.controls.servicio.setValue(servicio);
    }
  }

  /** Indica si un campo debe mostrar su mensaje de error. */
  tieneError(campo: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[campo];
    return control.invalid && (control.touched || control.dirty);
  }

  enviar(): void {
    this.enviadoPor.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.enviadoPor.set(this.form.controls.nombre.value.split(' ')[0]);
    this.form.reset();
  }
}
