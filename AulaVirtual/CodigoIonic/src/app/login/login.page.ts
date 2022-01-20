import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Persona } from '../interfaces/interfaces';
import { AuthService } from '../servicios/auth.service';


//mis importaciones

@Component({  selector: 'app-login',

  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credencial:any = {};
  ObjPersona:Persona;
  ObjDataUsuario:any = {};
  IDcurso:number=null;
  IDusuario:number=null;

  constructor(private router:Router, private autentificacion:AuthService, private alertController: AlertController) { 
    
  }
 
  ngOnInit() {  }


  Logear(){
    if(this.credencial.usuario != "" && this.credencial.contrasenia != ""){
      this.ObjPersona=this.credencial;
      console.log(this.ObjPersona);
      console.log("Usuario:"+this.ObjPersona.usuario);
      console.log("Contraseña:"+this.ObjPersona.contrasenia);
      
      this.autentificacion.postPersona(this.ObjPersona)
      .subscribe(data=>{
        console.log("respuesta:"+JSON.stringify(data));
        /* this.navCtrl.navigateRoot */
        if(data!=null){
          this.ObjDataUsuario= data;
          this.IDcurso=this.ObjDataUsuario[0].idCurso; //por este solo valdria para el estudiante y docentes
          this.IDusuario=this.ObjDataUsuario[0].idPersona;
          this.autentificacion.setCurso(this.IDcurso); //envio del id del curso mediante el servicio de autentificacion
          this.autentificacion.setPPerfil(this.IDusuario); //envio del id del usurio que ingreso
          this.router.navigate(['/menutabs']);
        }else{
          console.log("datos  incorrectos"); 
          this.presentAlert("Error","Usuario o contraseña son incorrectos");
        }
        //
      });
      

      
    }else{
      console.log("ingrese la contraseña");
    }
    
  }

  LogearAdmin(){
    if(this.credencial.usuario != "" && this.credencial.contrasenia != ""){
      this.ObjPersona=this.credencial;
      console.log(this.ObjPersona);
      console.log("Usuario:"+this.ObjPersona.usuario);
      console.log("Contraseña:"+this.ObjPersona.contrasenia);
      

      //Este solo para administradores
      this.autentificacion.postPersona(this.ObjPersona)
      .subscribe(data=>{
        console.log("respuesta:"+JSON.stringify(data));
        /* this.navCtrl.navigateRoot */
        if(data!=null){
          this.ObjDataUsuario= data;
          this.IDcurso=this.ObjDataUsuario[0].idCurso; //por este solo valdria para el estudiante y docentes
          this.IDusuario=this.ObjDataUsuario[0].idPersona;
          this.autentificacion.setCurso(this.IDcurso); //envio del id del curso mediante el servicio de autentificacion
          this.autentificacion.setPPerfil(this.IDusuario); //envio del id del usurio que ingreso
          this.router.navigate(['/admin']);
        }else{
          console.log("datos  incorrectos"); 
          this.presentAlert("Error","Usuario o contraseña son incorrectos");
        }
        //
      });
      

      
    }else{
      console.log("ingrese la contraseña");
    }
    
  }

  async presentAlert(titulo:string, mesnsaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode:"ios",
      header: titulo,
      message: mesnsaje,
      buttons: ['OK']
    });
    await alert.present();
  }
  
}
 