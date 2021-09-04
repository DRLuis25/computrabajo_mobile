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
	getAnuncioById(){
		return this.http.get('http://localhost:8000/api/anuncios/1');
	}
	createAnuncio(){
	}
	editAnuncio(){
	}
	deleteAnuncio(){
	}
}
