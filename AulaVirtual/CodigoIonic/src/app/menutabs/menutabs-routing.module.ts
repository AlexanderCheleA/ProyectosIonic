import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenutabsPage } from './menutabs.page';

const routes: Routes = [
  {
    path: 'menutabs',
    component: MenutabsPage,
    children: [
      {
        path: 'perfil',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'cursos',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../paginas/cursos/cursos.module').then( m => m.CursosPageModule)
          }
        ]
      },
      {
        path: 'materias',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../paginas/materias/materias.module').then( m => m.MateriasPageModule)
          }
        ]
      },{
        path: 'docente',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../paginas/docente/docente.module').then( m => m.DocentePageModule)
          }
        ]
      }/* ,{
        path: 'tareas',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../paginas/tareas/tareas.module').then( m => m.TareasPageModule)
          }
        ]
      } */,{
        path: 'material',
        children:
        [
          {
            path: '',
            loadChildren: () => import('../paginas/material/material.module').then( m => m.MaterialPageModule)
          }
        ]
      },{
        path: '',
        redirectTo: '/menutabs/cursos',
        pathMatch: 'full'
      }
    ]
  },{
    path: '',
    redirectTo: '/menutabs/cursos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenutabsPageRoutingModule {}
