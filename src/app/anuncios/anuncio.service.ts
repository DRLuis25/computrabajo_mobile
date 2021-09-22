import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AnuncioService {

	constructor(
    private http: HttpClient
	) { }
	getAnuncios(){
		return this.http.get<any>('http://localhost:8000/api/anuncios');
	}
	getAnuncioById(id: string){
		return this.http.get<any>('http://localhost:8000/api/anuncios/'+id);
	}
	createAnuncio(id){
		return this.http.post<any>('http://localhost:8000/api/anuncios/',{
			id
		});
	}
	editAnuncio(idAnuncio){
		return this.http.post<any>('http://localhost:8000/api/anuncios/',{
			idAnuncio
		});
	}
	deleteAnuncio(){
	}
	finalizarAnuncio(idAnuncio, termino, valoracion, comentario){
		return this.http.post<any>('http://localhost:8000/api/anuncios/finalizar-anuncio',{
			idAnuncio, termino, valoracion, comentario
		});
	}
}
