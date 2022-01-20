import { Component, OnInit } from '@angular/core';
import { UsuarioD } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  listaDocente:UsuarioD[];
  
  anioActual:number = new Date().getFullYear();
  edad:number = null;
  anio: number=null;
  mes: number=null;
  dia: number=null;

  constructor(private autentificacion:AuthService) { }

  ngOnInit() { 
    console.log("curso id recivido de la paguina login");
    console.log(this.autentificacion.getDDocente());
    this.llenarDataDocente();
    
  }

  llenarDataDocente(){
    this.autentificacion.getPerfil(this.autentificacion.getPPerfil())
    .subscribe(data=>{
      if(data!=null){
        this.listaDocente=data;
        console.log("respuestaCurso:"+JSON.stringify(data));
        console.log(this.listaDocente);
        console.log("edad");
        //this.edad=;
        console.log(this.listaDocente[0].edadPersona);
        this.anio= new Date(this.listaDocente[0].edadPersona).getFullYear();
        this.mes= new Date(this.listaDocente[0].edadPersona).getMonth()+1;
        this.dia= new Date(this.listaDocente[0].edadPersona).getDate();
        console.log(this.anio);  
        this.edad=this.anioActual-this.anio;
        console.log(this.edad);
      }else{
        console.log("datos  incorrectos deldocente"); 
      }
    });
  }

}