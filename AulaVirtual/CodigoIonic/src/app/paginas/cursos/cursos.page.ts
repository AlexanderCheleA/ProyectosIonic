import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  listaCurso:Curso[];
  IDdocente:number=null;
  ObjDataCurso:any = {};

  constructor(private router:Router, private autentificacion:AuthService) {

  }
 
  ngOnInit() {
    console.log("curso id recivido de la paguina login");
    console.log(this.autentificacion.getCurso());
    this.llenarCurso();
  }

  llenarCurso(){
    
    this.autentificacion.postCurso(this.autentificacion.getCurso())
    .subscribe(data=>{
      if(data!=null){
        this.listaCurso=data;
        console.log("respuestaCurso:"+JSON.stringify(data));
        console.log("presentar data");
        this.IDdocente=this.listaCurso[0].idDocente; //por este solo valdria para el estudiante y docentes
        console.log(this.listaCurso[0].idDocente);
        this.autentificacion.setDDocente(this.IDdocente); //envio del id del curso mediante el servicio de autentificacion
      }else{
        console.log("datos  incorrectos"); 
      }
    });
  }

  verDocente(item:Curso){
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

}
