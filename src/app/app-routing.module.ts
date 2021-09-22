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
			},
			{
				path:'publicar-anuncio',
				loadChildren:() => import('./anuncios/publicar-anuncio/publicar-anuncio.module').then( m => m.PublicarAnuncioPageModule)
			},
			{
				path:'editar-anuncio/:anuncioId',
				loadChildren:() => import('./anuncios/editar-anuncio/editar-anuncio.module').then( m => m.EditarAnuncioPageModule)
			}
		]
	},
	{
		path: 'filtros',
		loadChildren: () => import('./filtros/filtros.module').then( m => m.FiltrosPageModule)
	},
  {
    path: 'publicar-anuncio',
    loadChildren: () => import('./anuncios/publicar-anuncio/publicar-anuncio.module').then( m => m.PublicarAnuncioPageModule)
  },
  {
    path: 'editar-anuncio',
    loadChildren: () => import('./anuncios/editar-anuncio/editar-anuncio.module').then( m => m.EditarAnuncioPageModule)
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
