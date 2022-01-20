import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponenteMenu } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getMenuOpts(){
    return this.http.get<ComponenteMenu[]>('/assets/data/menu.json');
 }

}
