import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },{
    path: '',
    redirectTo: 'hola',
    pathMatch: 'full'
  },
  {
    path: 'hola',
    loadChildren: () => import('./hola/hola.module').then( m => m.HolaPageModule)
  },
  {
    path: '',
    loadChildren: './menutabs/menutabs.module#MenutabsPageModule'
  },
  {
    path: 'modalenvio',
    loadChildren: () => import('./paginas/modalenvio/modalenvio.module').then( m => m.ModalenvioPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'estu',
    loadChildren: () => import('./estu/estu.module').then( m => m.EstuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
