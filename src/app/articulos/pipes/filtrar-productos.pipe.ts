import { Pipe, PipeTransform } from '@angular/core';
import { ProductoI } from '../models/productos';

@Pipe({
  name: 'filtrarProductos',
  pure : false
})
export class FiltrarProductosPipe implements PipeTransform {

  transform(value: ProductoI[], arg: string): ProductoI[] {
    const listaArticulos = []

    let target = arg.toLowerCase()

    for ( const articulo of value ){
       if( articulo.nombre.indexOf(target) > -1  ){
         listaArticulos.push(articulo)
       }
     }

     return listaArticulos
  }

}
