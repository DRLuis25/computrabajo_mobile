import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactarEmpleadorPage } from './contactar-empleador.page';

const routes: Routes = [
  {
    path: '',
    component: ContactarEmpleadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactarEmpleadorPageRoutingModule {}
