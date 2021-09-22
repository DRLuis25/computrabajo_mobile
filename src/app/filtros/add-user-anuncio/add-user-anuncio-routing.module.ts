import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserAnuncioPage } from './add-user-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserAnuncioPageRoutingModule {}
