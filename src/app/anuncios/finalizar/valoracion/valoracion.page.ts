import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from '../../anuncio.service';
import { CriterioService } from './criterio.service';

@Component({
	selector: 'app-valoracion',
	templateUrl: './valoracion.page.html',
	styleUrls: ['./valoracion.page.scss'],
})
export class ValoracionPage implements OnInit {
  anuncio: any = [];
  criterios: any = [];
  termino;
  prof = 0;
  valoracion: any = {};
  comentario = '';
  constructor(
    private anuncioService: AnuncioService,
    private criterioService: CriterioService,
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
  				//console.log('termino: ',this.termino);
  			},
  			(err) => {
  				console.log('Error al obtener el anuncio:', err);
  			}
  		);
  		this.criterioService.getCriterios().subscribe((res)=>{
  			this.criterios = res.data;
  			//console.log('criterios', this.criterios);
  		},(err)=>{
  			console.log('Error al obtener los criterios',err);
  		});
  	});
  }
  enviarValoracion(){
  	//Get anuncio_id
  	console.log(this.anuncio.id, this.termino, this.valoracion, this.comentario);
  	//Enviar valoración_criterios, comentario, estado_finalizado
  	console.log('Valoración enviada');
  	//Enviar POST
  	this.anuncioService.finalizarAnuncio(this.anuncio.id,this.termino,this.valoracion,this.comentario)
  		.subscribe((res)=> {
  			console.log(res);
  			this.router.navigate(['/anuncios/finalizar',this.anuncio.id,'final']);
  		},(err)=>{
  			console.log(err);
  		});
  	//Enviar vista final con opción a volver a mis anuncios
  }
  test(){
  	console.log(this.prof);
  	console.log('valoración',this.valoracion);
  }
}
