import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstuPage } from './estu.page';

const routes: Routes = [
  {
    path: '',
    component: EstuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstuPageRoutingModule {}
