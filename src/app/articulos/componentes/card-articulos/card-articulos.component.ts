import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoI } from '../../models/productos';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-card-articulos',
  templateUrl: './card-articulos.component.html',
  styleUrls: ['./card-articulos.component.css']
})
export class CardArticulosComponent implements OnInit {

  @Input() producto!: ProductoI;
  @Output() producto_eliminado = new EventEmitter()
  form!: FormGroup;
  show = false


  constructor(private formbuilder : FormBuilder, private productosService : ProductosService) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      precio:['']
    })
  }

  eliminar(){
    this.productosService.eliminarProducto(this.producto).subscribe(data =>{
      this.producto_eliminado.emit(this.producto.nombre)
    })
    this.show = false
  }

  enviarData(){
    let nuevoproducto : ProductoI = {
      nombre : this.producto.nombre,
      precio : this.form?.value.precio 
    }

    this.producto.precio = Number(this.form?.value.precio)

    this.form?.setValue({
      precio : ''
    })

    this.productosService.actualizarProducto(nuevoproducto).subscribe(data =>{
      console.log(data)
    })
    this.show = false

  }
}
