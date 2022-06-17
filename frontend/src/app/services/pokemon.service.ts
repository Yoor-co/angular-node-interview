import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url = 'http://localhost:3010'
  httpOptions: any;


  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getPokemons():Observable<any> {
    return this.http.get(`${this.url}/getPokemons`, this.httpOptions);
  }
}
