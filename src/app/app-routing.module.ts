import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
	},
	{
		path: 'anuncios',
		children: [
			{
				path: 'mis-anuncios',
				loadChildren: () => import('./anuncios/mis-anuncios/mis-anuncios.module').then(m => m.MisAnunciosPageModule)
			},
			{
				path: 'finalizar/:anuncioId',
				loadChildren: () => import('./anuncios/finalizar/finalizar.module').then(m => m.FinalizarPageModule)
			},
			{
				path: 'finalizar/:anuncioId/valoracion/:termino',
				loadChildren: () => import('./anuncios/finalizar/valoracion/valoracion.module').then(m => m.ValoracionPageModule)
			},
			{
				path: '',
				redirectTo: '/anuncios/mis-anuncios',
				pathMatch: 'full'
			}
		]
	},
	{
		path: 'filtros',
		children: [
			{
				path: "",
				loadChildren: () => import('./filtros/filtros.module').then(m => m.FiltrosPageModule)
			},
			{
				path: ":id",
				loadChildren: () => import('./filtros/contactar-empleador/contactar-empleador.module').then(m =>m.ContactarEmpleadorPageModule)
			}
		]
	},
  {
    path: 'add-user-anuncio',
    loadChildren: () => import('./filtros/add-user-anuncio/add-user-anuncio.module').then( m => m.AddUserAnuncioPageModule)
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
export class AppRoutingModule { }
