import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';

@Component({
	selector: 'app-mis-anuncios',
	templateUrl: './mis-anuncios.page.html',
	styleUrls: ['./mis-anuncios.page.scss'],
})
export class MisAnunciosPage implements OnInit {
  anuncios: any = [];
  constructor(private anuncioService: AnuncioService) {}

  ngOnInit() {
  	//! Obtiene todos los anuncios. Se debe filtrar por usuario
  	this.anuncioService.getAnuncios().subscribe(
  		(res) => {
  			this.anuncios = res.data;
  		},
  		(err) => {
  			console.log('ERROR: ', err);
  		}
  	);
  }
}
