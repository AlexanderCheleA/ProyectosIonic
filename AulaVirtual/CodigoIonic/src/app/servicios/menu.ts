import { Injectable } from '@angular/core';
import { ComponenteMenu } from '../interfaces/interfaces';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  getMenu(){
    return this.http.get<ComponenteMenu[]>('/assets/data/menu.json');
 }
  
}
