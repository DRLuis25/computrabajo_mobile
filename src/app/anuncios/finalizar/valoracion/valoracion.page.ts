import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from '../../anuncio.service';

@Component({
	selector: 'app-valoracion',
	templateUrl: './valoracion.page.html',
	styleUrls: ['./valoracion.page.scss'],
})
export class ValoracionPage implements OnInit {
  anuncio: any = [];
  termino;
  prof = 0;
  constructor(
    private anuncioService: AnuncioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  	this.activatedRoute.paramMap.subscribe((paramMap) => {
  		const anuncioId = paramMap.get('anuncioId');
  		this.termino = paramMap.get('termino');
  		this.anuncioService.getAnuncioById(anuncioId).subscribe(
  			(res) => {
  				this.anuncio = res.data;
  				console.log('termino: ',this.termino);
  			},
  			(err) => {
  				console.log('Error al obtener el anuncio:', err);
  			}
  		);
  	});
  }
  test(){
  	console.log(this.prof);
  }
}
