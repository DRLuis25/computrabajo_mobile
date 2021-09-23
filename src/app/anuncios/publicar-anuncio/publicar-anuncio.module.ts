import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarAnuncioPageRoutingModule } from './publicar-anuncio-routing.module';

import { PublicarAnuncioPage } from './publicar-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarAnuncioPageRoutingModule
  ],
  declarations: [PublicarAnuncioPage]
})
export class PublicarAnuncioPageModule {}
