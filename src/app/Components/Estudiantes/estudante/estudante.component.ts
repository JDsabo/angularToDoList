import { Component, OnInit } from '@angular/core';
import { iEstudiante } from 'src/app/Interface/iEstudiante';
import { EstudianteService } from "src/app/Services/estudiante.service";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {
  titulo:string='';
  llave:{key:string}|any;
  data:iEstudiante={    
    Key$:'',
    carnet:'',
    nombre:'',
    apellido1:'',
    apellido2:'',
    telefono:'',
    carrera:''
  }

  initEstudiante:iEstudiante={    
    Key$:'',
    carnet:'',
    nombre:'',
    apellido1:'',
    apellido2:'',
    telefono:'',
    carrera:''
  }

  constructor(public servicio: EstudianteService,private rutaActiva:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.titulo='Agregar'
    const params = this.rutaActiva.snapshot.params['llave'];   
    console.log('params::',params) 
    if(params!== undefined){ 
      this.titulo='Modificar'     
      this.data=JSON.parse(params);
    }
  }
  agregar(){
    if(this.data.Key$==='')
    this.servicio.Add(this.data)
    else{
      this.servicio.Update(this.data);    
      this.router.navigate([ `listaestudiantes`])
    }
    
    this.data= this.initEstudiante;
  }


}
