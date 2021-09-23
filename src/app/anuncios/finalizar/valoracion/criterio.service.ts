import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CriterioService {

	constructor(
    private http: HttpClient
	) { }
	getCriterios(){
		return this.http.get<any>('http://localhost:8000/api/criterios');
	}
}
