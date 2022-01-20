import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Materia } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
})
export class MateriasPage implements OnInit {
  listaMateria:Materia[];
  IDMateria:number=null;
  IDdocente:number=null;

  constructor(private router:Router, private autentificacion:AuthService) {

  }
 
  ngOnInit() {
    console.log("curso id recivido de la paguina login");
    console.log(this.autentificacion.getCurso());
    this.llenarCurso();
  }

  llenarCurso(){
    
    this.autentificacion.getMateria(this.autentificacion.getCurso())
    .subscribe(data=>{
      if(data!=null){
        this.listaMateria=data;
        console.log("respuestaCurso:"+JSON.stringify(data));
        //console.log("presentar data");
        //this.IDdocente=this.listaCurso[0].idDocente; //por este solo valdria para el estudiante y docentes
        //console.log(this.listaCurso[0].idDocente);
        //this.autentificacion.setDDocente(this.IDdocente); //envio del id del curso mediante el servicio de autentificacion
      }else{
        console.log("datos  incorrectos"); 
      }
    });
  }

  verDocente(item:Materia){
    console.log(item.idDocente);
    this.IDdocente=item.idDocente;
    console.log("Daata enviada");
    console.log(item.idDocente);
    this.autentificacion.setDDocente(item.idDocente);
    console.log("Daata recibida");
    console.log(this.autentificacion.getDDocente());
    this.router.navigate(['/menutabs/docente']);
    this.IDdocente=null;
  }

  IrMateria(item:Materia){
    console.log(item.idMateria);
    console.log("Daata enviada Material");
    this.autentificacion.setMMaterial(item.idMateria);
    this.router.navigate(['/menutabs/material']);
  }

}
