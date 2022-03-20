import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoI } from '../../models/productos';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-grid-card-articulos',
  templateUrl: './grid-card-articulos.component.html',
  styleUrls: ['./grid-card-articulos.component.css']
})
export class GridCardArticulosComponent implements OnInit {

  form!: FormGroup;
  activeFormulario = false
  activeFormularioMsj = "[ +Agregar Producto+ ]"
  
  lista : ProductoI[] = []
  filtrarArticulos = ""

  constructor(private productoService : ProductosService,private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe( data => this.lista = data)
    this.form = this.formbuilder.group({
      nombre : ['', Validators.required],
      precio:['', Validators.required]
    })
  }

  getlista(){
    return this.lista
  }

  sacarProducto(productoEliminado : string){
    let nuevaLista = this.lista.filter( item => item.nombre.indexOf(productoEliminado) === -1)
    this.lista = nuevaLista
  }

  actionFormulario(){
    this.activeFormulario = !this.activeFormulario
    this.activeFormularioMsj = this.activeFormulario ? "[ + Insertar en la base datos + ]":"[ +Agregar Producto+ ]"
  }

  enviarData(){
    if (!this.form.valid){
      console.log("Faltan campos por llenar")
    }
    else{
      let nombre = this.form?.value.nombre.toLowerCase()
      let nuevoproducto : ProductoI = {
        nombre : nombre,
        precio : this.form?.value.precio 
      }
      this.productoService.crearProducto(nuevoproducto).subscribe(data =>{
        this.lista.push(data)
        this.form?.setValue({nombre : '', precio : ''})
      })
    }
  }
}
