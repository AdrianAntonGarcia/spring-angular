import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndPoint: string = 'http://localhost:8080/api';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    // return of(CLIENTES);
    return this.http.get(this.urlEndPoint + '/clientes').pipe(
      map((response) => {
        return response as Cliente[];
      })
    );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http
      .post(this.urlEndPoint + '/clientes', cliente, {
        headers: this.httpHeaders,
      })
      .pipe(
        map((response) => {
          return response as Cliente;
        })
      );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http
      .put(this.urlEndPoint + '/clientes/' + cliente.id, cliente, {
        headers: this.httpHeaders,
      })
      .pipe(
        map((response) => {
          return response as Cliente;
        })
      );
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get(`${this.urlEndPoint}/clientes/${id}`).pipe(
      map((response) => {
        return response as Cliente;
      })
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.urlEndPoint}/clientes/${id}`);
  }
}
