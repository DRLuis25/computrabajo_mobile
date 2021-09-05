import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnuncioService } from '../anuncio.service';
@Component({
	selector: 'app-finalizar',
	templateUrl: './finalizar.page.html',
	styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {
  anuncio: any = [];
  distrito: any = [];
  ciudad: any = [];
  departamento: any = [];
  constructor(
    private anuncioService: AnuncioService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
  	this.activatedRoute.paramMap.subscribe((paramMap) => {
  		if (!paramMap) {
  			//redirect
  		}
  		const anuncioId = paramMap.get('anuncioId');
  		//console.log('anuncioId: ', anuncioId);
  		this.anuncioService.getAnuncioById(anuncioId).subscribe(
  			(res) => {
  				this.anuncio = res.data;
  				this.distrito = res.data.distrito;
  				this.ciudad = res.data.ciudad;
  				this.departamento = res.data.departamento;
  			},
  			(err) => {
  				console.log('Error al obtener el anuncio:', err);
  			}
  		);
  	});
  }
  finalizarAnuncio(id: string) {
  	console.log('Finalizar', 'id:', id);
  }
}
