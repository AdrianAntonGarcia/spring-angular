import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  titulo: string = '';

  cliente: Cliente = {};

  clienteForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    createAt: new FormControl(),
  });

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.clienteForm.get('createAt')?.setValue(new Date());
    this.cliente = this.clienteForm.value;
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
  }
}
