import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  titulo: string = '';

  cliente: Partial<Cliente> = {};

  clienteForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    createAt: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.clienteForm.get('createAt')?.setValue(new Date());
    this.cliente = this.clienteForm.value;
  }
}
