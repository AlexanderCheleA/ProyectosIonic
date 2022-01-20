import { Injectable } from '@angular/core';
  //mis importaciones
 import{HttpClient,HttpHeaders } from '@angular/common/http'
  
import{Persona, Curso, UsuarioD, Materia, Material}from '../interfaces/interfaces';
  
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  path_base="http://192.168.43.209/archivosphp/login.php";
  path_base_curso="http://192.168.43.209/archivosphp/cargarcurso.php";
  path_base_materia="http://192.168.43.209/archivosphp/cargarmateria.php/?id=";
  path_base_docente="http://192.168.43.209/archivosphp/cargardocente.php/?id=";
  path_base_perfil="http://192.168.43.209/archivosphp/cargarusuario.php/?id=";
  path_base_material="http://192.168.43.209/archivosphp/cargarmaterial.php/?id=";

  //0954444444 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  }
  
  constructor(private http:HttpClient) { }

  postPersona(persona:Persona){
    let newURL=this.path_base;
    let newPersona=JSON.stringify(persona);
    return this.http.post(newURL,newPersona,this.httpOptions);
  }
  
  ////envio del id curso a otra paguina
  private idCCurso : number=null;
  
  public getCurso() : any{
    return this.idCCurso;
  }

  public setCurso(idCCurso : number){
    this.idCCurso=idCCurso;
  }
  /////////////
  ////envio del id docente a otra paguina
  private idDDocente : number=null;
  
  public getDDocente() : any{
    return this.idDDocente;
  }

  public setDDocente(idDDocente : number){
    this.idDDocente=idDDocente;
  }
  /////////////
  ////envio del id Perfil a otra paguina
  private idPPerfil : number=null;
  
  public getPPerfil() : any{
    return this.idPPerfil;
  }

  public setPPerfil(idPPerfil : number){
    this.idPPerfil=idPPerfil;
  }
  /////////////
  ////envio del id Perfil a otra paguina
  private idMMaterial : number=null;
  
  public getMMaterial() : any{
    return this.idMMaterial;
  }

  public setMMaterial(idMMaterial : number){
    this.idMMaterial=idMMaterial;
  }
  /////////////

  postCurso(idCurso:number){
    let newURL=this.path_base_curso;
    let buscarid=JSON.stringify({idCurso:idCurso});
    return this.http.post<[Curso]>(newURL,buscarid,this.httpOptions);
  }

  getMateria(idCurso:number){
    let newURL=this.path_base_materia+idCurso;
    return this.http.get<[Materia]>(newURL);
  }

  getDocente(idDocente:number){
    let newURL=this.path_base_docente+idDocente;
    return this.http.get<[UsuarioD]>(newURL);
  }

  getPerfil(idPerfil:number){
    let newURL=this.path_base_perfil+idPerfil;
    return this.http.get<[UsuarioD]>(newURL);
  }

  getMaterial(idMateria:number){
    let newURL=this.path_base_material+idMateria;
    return this.http.get<[Material]>(newURL);
  }

}
  
