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
	createAnuncio(fecha, email, telefono, direccion, titulo, oficio, descripcion, minimo, maximo, idDepartamento, idCiudad, idDistrito){
		return this.http.post<any>('http://localhost:8000/api/anuncios/guardar-anuncio',{
			fecha, email, telefono, direccion, titulo, oficio, descripcion, minimo, maximo, idDepartamento, idCiudad, idDistrito
		});
	}
	editAnuncio(id,fecha, email, telefono, direccion, titulo, descripcion, minimo, maximo){
		return this.http.post<any>('http://localhost:8000/api/anuncios/guardar-anuncio',{
			id,fecha, email, telefono, direccion, titulo, descripcion, minimo, maximo
		});
	}
	deleteAnuncio(){
	}
	finalizarAnuncio(idAnuncio, termino, valoracion, comentario){
		return this.http.post<any>('http://localhost:8000/api/anuncios/finalizar-anuncio',{
			idAnuncio, termino, valoracion, comentario
		});
	}

	getOficios(){
		return this.http.get<any>('http://localhost:8000/api/getOficio');
	}

	getDepartamentos(){
		return this.http.get<any>('http://localhost:8000/api/getDepartamentos');
	}

	getCiudades(idDepartamento: string){
		return this.http.get<any>('http://localhost:8000/api/getCiudad/'+idDepartamento);
	}

	getDistritos(idCiudad){
		return this.http.get<any>('http://localhost:8000/api/getDistrito/'+idCiudad);
	}

}
