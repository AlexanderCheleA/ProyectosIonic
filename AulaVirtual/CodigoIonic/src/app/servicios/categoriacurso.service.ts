import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria} from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoriacursoService {
 
  private categ=[];
  constructor(private http:HttpClient) { }

  getCategoriaj(){
    return this.http.get<Categoria[]>('/assets/data/curso.json');
  }

  getcateg(){
    return this.categ;
  }

  
}
