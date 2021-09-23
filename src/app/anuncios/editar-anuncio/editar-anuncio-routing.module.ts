import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAnuncioPage } from './editar-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAnuncioPageRoutingModule {}
