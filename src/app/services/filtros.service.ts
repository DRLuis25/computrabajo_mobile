import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filtros } from '../filtros/filtros.model';


@Injectable({ providedIn: 'root' })

export class FiltroService {
    apiUrl = 'http://localhost:8000/api';

    constructor(private http: HttpClient){}

    getAnuncios(): Observable<Filtros[]>{  //Llamado a la interfaz
        return this.http.get<Filtros[]>(`${this.apiUrl}/filtros`); //Jalando datos 
        
    }

}
