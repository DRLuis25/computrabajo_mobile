import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarPage } from './finalizar.page';

const routes: Routes = [
	{
		path: '',
		component: FinalizarPage
	},
	{
		path: 'final',
		loadChildren: () => import('./final/final.module').then( m => m.FinalPageModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FinalizarPageRoutingModule {}
