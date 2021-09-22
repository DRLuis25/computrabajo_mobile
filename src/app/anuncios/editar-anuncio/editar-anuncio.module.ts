import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAnuncioPageRoutingModule } from './editar-anuncio-routing.module';

import { EditarAnuncioPage } from './editar-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAnuncioPageRoutingModule
  ],
  declarations: [EditarAnuncioPage]
})
export class EditarAnuncioPageModule {}
