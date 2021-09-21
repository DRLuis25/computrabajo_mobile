import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';

@Component({
	selector: 'app-mis-anuncios',
	templateUrl: './mis-anuncios.page.html',
	styleUrls: ['./mis-anuncios.page.scss'],
})
export class MisAnunciosPage implements OnInit {
  anuncios: any = [];
  items:any;

  constructor(private anuncioService: AnuncioService) {}

  ngOnInit() {
  	//! Obtiene todos los anuncios. Se debe filtrar por usuario
  	this.anuncioService.getAnuncios().subscribe(
  		(res) => {
  			this.anuncios = res.data;
			this.items = this.anuncios;
  		},
  		(err) => {
  			console.log('ERROR: ', err);
  		}
  	);
  }

  initializaItems() {
	this.items = this.anuncios;
  }

  getItems(ev: any) {
	  this.initializaItems();
	  let val = ev.target.value;
	  if(val && val.trim() != '') {
		  this.items = this.items.filter((item) => {
			  return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
		  })
	  }
  }

}
