import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../servicios/menu';
import { Observable } from 'rxjs';
import { ComponenteMenu } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentesMenu:Observable<ComponenteMenu[]>;
  constructor(private ar:MenuService) { }

  ngOnInit() {
    this.componentesMenu = this.ar.getMenu();
  }

}
