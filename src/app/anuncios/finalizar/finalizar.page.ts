import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
@Component({
	selector: 'app-finalizar',
	templateUrl: './finalizar.page.html',
	styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {
	constructor(private anuncioService: AnuncioService) {}

	ngOnInit() {
		this.anuncioService.getAnuncios().subscribe(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
		console.log('inicio');
	}
	finalizarAnuncio(id: string) {
		console.log('Finalizar', 'id:', id);
	}
}
