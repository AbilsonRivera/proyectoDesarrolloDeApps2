import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements OnInit {

  losdatos:any = [];

  constructor(private servicio:DataService) {}

  ngOnInit(): void {
    this.servicio.obternerDatos().subscribe((data:any)=>{
      console.log(data);
      this.losdatos = data;
    })
  }

}
