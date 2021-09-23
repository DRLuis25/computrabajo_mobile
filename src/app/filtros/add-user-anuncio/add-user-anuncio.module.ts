import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserAnuncioPageRoutingModule } from './add-user-anuncio-routing.module';

import { AddUserAnuncioPage } from './add-user-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUserAnuncioPageRoutingModule
  ],
  declarations: [AddUserAnuncioPage]
})
export class AddUserAnuncioPageModule {}
