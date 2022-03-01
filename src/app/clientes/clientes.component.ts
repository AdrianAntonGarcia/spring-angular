import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] | undefined;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  eliminarCliente(id: number) {
    Swal.fire({
      title: '¿Está seguro que quiere eliminar el cliente?',
      confirmButtonText: 'Si',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(id).subscribe(() => this.cargarClientes());
      }
    });
  }

  cargarClientes() {
    this.clienteService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }
}
