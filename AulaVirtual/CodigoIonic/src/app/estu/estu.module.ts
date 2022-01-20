import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstuPageRoutingModule } from './estu-routing.module';

import { EstuPage } from './estu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstuPageRoutingModule
  ],
  declarations: [EstuPage]
})
export class EstuPageModule {}
