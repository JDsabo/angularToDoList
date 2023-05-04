import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iEstudiante } from 'src/app/Interface/iEstudiante';
import {EstudianteService  } from "src/app/Services/estudiante.service";
@Component({
  selector: 'app-lista-estudantes',
  templateUrl: './lista-estudantes.component.html',
  styleUrls: ['./lista-estudantes.component.css']
})
export class ListaEstudantesComponent implements OnInit {

  constructor(public servicio: EstudianteService, private router:Router) { }

  ngOnInit(): void {
    this.servicio.Read();
  }
  editar(item:iEstudiante)
  {
    const obj= JSON.stringify(item)
    this.router.navigate([ `estudiante/${obj}`])    
  }
  eliminar(item:iEstudiante){
    this.servicio.Delete(item);
  }
}
