import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactarEmpleadorPageRoutingModule } from './contactar-empleador-routing.module';

import { ContactarEmpleadorPage } from './contactar-empleador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactarEmpleadorPageRoutingModule
  ],
  declarations: [ContactarEmpleadorPage]
})
export class ContactarEmpleadorPageModule {}
