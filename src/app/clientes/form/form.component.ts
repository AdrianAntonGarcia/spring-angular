import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  titulo: string = 'Crear cliente';

  cliente: Cliente = {};

  buttonDisabled = false;

  modificarCliente = false;

  clienteForm = new FormGroup({
    id: new FormControl(),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    createAt: new FormControl(),
  });

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idCliente = this.activatedRoute.snapshot.queryParams['id'];
    if (idCliente) {
      this.clienteService.getCliente(idCliente).subscribe((cliente) => {
        this.modificarCliente = true;
        this.clienteForm.setValue(cliente);
        this.titulo = 'Modificar cliente';
        this.clienteForm.markAsPristine();
        this.clienteForm.markAsUntouched();
      });
    }
  }

  onSubmit() {
    this.clienteForm.get('createAt')?.setValue(new Date());
    this.cliente = this.clienteForm.value;
    if (!this.modificarCliente) {
      this.clienteService.create(this.cliente).subscribe({
        error: ({ error }: HttpErrorResponse) => {
          console.log(error.error.message);
          Swal.fire({
            title: 'Error! ',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool',
          });
        },
        next: (cliente) => {
          Swal.fire({
            title: 'Creado! ' + cliente.nombre,
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          this.router.navigate(['/clientes']);
        },
      });
    } else {
      this.clienteService.update(this.cliente).subscribe({
        error: ({ error }: HttpErrorResponse) => {
          console.log(error.error.message);
          Swal.fire({
            title: 'Error! ',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool',
          });
        },
        next: (cliente) => {
          Swal.fire({
            title: 'Modificadoo! ' + cliente.nombre,
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          this.router.navigate(['/clientes']);
        },
      });
    }
  }
}
