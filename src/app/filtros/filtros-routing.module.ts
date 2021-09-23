import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltrosPage } from './filtros.page';

const routes: Routes = [
  {
    path: '',
    component: FiltrosPage
  },
  {
    path: 'contactar-empleador',
    loadChildren: () => import('./contactar-empleador/contactar-empleador.module').then( m => m.ContactarEmpleadorPageModule)
  },
  {
    path: 'add-user-anuncio',
    loadChildren: () => import('./add-user-anuncio/add-user-anuncio.module').then( m => m.AddUserAnuncioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltrosPageRoutingModule {}
