import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Adrián',
      apellido: 'Antón',
      email: 'adrtler@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 2,
      nombre: 'Pepe',
      apellido: 'Peras',
      email: 'pepe@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 3,
      nombre: 'Antonio',
      apellido: 'Antón',
      email: 'antonio@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 4,
      nombre: 'Gema',
      apellido: 'Pepa',
      email: 'gema@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 5,
      nombre: 'Ana',
      apellido: 'ana',
      email: 'ana@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 6,
      nombre: 'Pedro',
      apellido: 'pep',
      email: 'pedro@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 7,
      nombre: 'Nuse',
      apellido: 'Nope',
      email: 'nope@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 8,
      nombre: 'Hola',
      apellido: 'Adios',
      email: 'hola@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 9,
      nombre: 'Josep',
      apellido: 'jo',
      email: 'josep@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 10,
      nombre: 'David',
      apellido: 'Pered',
      email: 'david@gmail.com',
      createAt: '2022-03-31',
    },
    {
      id: 11,
      nombre: 'Alejandro',
      apellido: 'Rubiales',
      email: 'alex@gmail.com',
      createAt: '2022-03-31',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
