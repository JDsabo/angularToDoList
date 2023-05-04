import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudanteComponent } from './Components/Estudiantes/estudante/estudante.component';
import{ListaEstudantesComponent}from './Components/Estudiantes/lista-estudantes/lista-estudantes.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'estudiante',component:EstudanteComponent},
  {path:'estudiante/:llave',component:EstudanteComponent},
  
  {path:'listaestudiantes',component:ListaEstudantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
