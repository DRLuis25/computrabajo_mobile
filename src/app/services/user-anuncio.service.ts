
import { FiltroService } from './filtros.service';
import { UserAnuncio } from './../filtros/contactar-empleador/contactar-empleador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserAnuncioService {
  apiUrl = 'http://localhost:8000/api'

  constructor(private http: HttpClient) { }

  getUsersAnuncios(): Observable<UserAnuncio[]>{  //Llamado a la interfaz
    return this.http.get<UserAnuncio[]>(`${this.apiUrl}/useranuncio`); //Jalando datos 
    
  }
 
 /*  getUserAnuncio(userAnuncioId:number){
    this.

  }
 */
  addUserAnuncio(UserAnuncio: UserAnuncio): Observable<UserAnuncio>{
   return this.http.post<UserAnuncio>(`${this.apiUrl}/useranuncio`,UserAnuncio);
  }
  deleteUserAnuncio(){

  }
  
  

}
