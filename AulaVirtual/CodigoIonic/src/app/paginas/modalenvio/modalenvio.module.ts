import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalenvioPageRoutingModule } from './modalenvio-routing.module';

import { ModalenvioPage } from './modalenvio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalenvioPageRoutingModule
  ],
  declarations: [ModalenvioPage]
})
export class ModalenvioPageModule {}
