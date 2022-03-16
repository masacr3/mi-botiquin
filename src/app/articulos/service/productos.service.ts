import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  consulta = "http://192.168.0.18:3001/api/productos" //end-point
  crear = "http://192.168.0.18:3001/api/crearProducto" //end-point
  actualizar = "http://192.168.0.18:3001/api/actualizarProducto" //end-point
  eliminar = "http://192.168.0.18:3001/api/eliminar/" //end-point

  constructor(private http : HttpClient) { }

  obtenerProductos() : Observable<ProductoI[]>{
    return this.http.get<ProductoI[]>(this.consulta)
  }

  crearProducto(producto: ProductoI) : Observable<ProductoI>{
    return this.http.post<ProductoI>(this.crear, producto)
  }

  actualizarProducto(producto: ProductoI) : Observable<ProductoI>{
    return this.http.put<ProductoI>(this.actualizar, producto)
  }

  eliminarProducto(producto: ProductoI) : Observable<ProductoI>{
    return this.http.delete<ProductoI>(this.eliminar+producto.nombre)
  }

}

