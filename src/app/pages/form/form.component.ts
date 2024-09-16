import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  nombre : string = "juana";

  cliente = {
    id: 0,
    nombre: '',
    telefono: 0
  }

  clientes : any []= [];


  cambiarNombre(){
    console.log("la variable del cliente ahora es: " + this.cliente.nombre);
  };

  agregarCliente(){
    this.clientes.push(this.cliente);
    this.cliente = {
      id: 0,
      nombre: '',
      telefono: 0,
    }
  }


  verDatosCliente(){
    return this.clientes.length < 1;
  }

  seleccionarCliente(cliente: any){
    this.cliente = cliente;
  }


  eliminarCliente(index: number) {
    this.clientes.splice(index, 1); // Eliminar cliente de la lista
  }


limpiarFormulario() {
  this.cliente = {
    id: 0,
    nombre: '',
    telefono: 0
  };
}


}
