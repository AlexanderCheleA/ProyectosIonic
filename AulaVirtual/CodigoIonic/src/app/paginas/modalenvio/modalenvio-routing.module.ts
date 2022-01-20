import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalenvioPage } from './modalenvio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalenvioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalenvioPageRoutingModule {}
