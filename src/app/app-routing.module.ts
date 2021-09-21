import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: 'anuncios',
		children:[
			{
				path:'mis-anuncios',
				loadChildren:() => import('./anuncios/mis-anuncios/mis-anuncios.module').then( m => m.MisAnunciosPageModule)
			},
			{
				path:'finalizar/:anuncioId',
				loadChildren: () => import('./anuncios/finalizar/finalizar.module').then( m => m.FinalizarPageModule)
			},
			{
				path: 'finalizar/:anuncioId/valoracion/:termino',
				loadChildren: () => import('./anuncios/finalizar/valoracion/valoracion.module').then( m => m.ValoracionPageModule)
			},
			{
				path: 'finalizar/:anuncioId/final',
				loadChildren: () => import('./anuncios/finalizar/final/final.module').then( m => m.FinalPageModule)
			},
			{
				path: '',
				redirectTo: '/anuncios/mis-anuncios',
				pathMatch: 'full'
			}
		]
	},
	/* {
		path: 'finalizar',
		loadChildren: () => import('./anuncios/finalizar/finalizar.module').then( m => m.FinalizarPageModule)
	},
	{
		path: 'mis-anuncios',
		loadChildren: () => import('./anuncios/mis-anuncios/mis-anuncios.module').then( m => m.MisAnunciosPageModule)
	} */
];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
