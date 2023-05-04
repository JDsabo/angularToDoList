import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { iEstudiante } from '../Interface/iEstudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  lEstudiante:any=[];
  constructor(private db:AngularFirestore) { 

  }
  Add(estudiante:iEstudiante){ 
    this.db.collection('estudiante').doc().set(estudiante).then(
      r=>{
        console.log('Se guardo el estudiante con exito');
      })
      .catch(error=>console.error('error::',error));
  }
  Read(){
    let array:any=[];
    const listaEstudiantes= this.db.collection<iEstudiante>('estudiante');
    listaEstudiantes.snapshotChanges().subscribe(res=>{
      res.map(r=>{
        const dt= r.payload.doc;
        let obj:iEstudiante=dt.data();
        obj.Key$=dt.id;
        array.push(obj);
      })
      this.lEstudiante=[];
      this.lEstudiante=array;
      array=[];
    })
  }  
  Update(estudiante:iEstudiante){
    let estudianteDoc= this.db.doc('estudiante/'+estudiante.Key$);
    estudianteDoc.update(estudiante);
  }
  Delete(estudiante:iEstudiante){
    this.db.doc('estudiante/'+estudiante.Key$).delete();
  }
}
