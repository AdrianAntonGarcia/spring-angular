import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

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
    this.clienteService
      .create(this.cliente)
      .subscribe(() => this.router.navigate(['/clientes']));
  }
}
