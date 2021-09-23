import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarAnuncioPage } from './publicar-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarAnuncioPageRoutingModule {}
