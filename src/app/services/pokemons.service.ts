import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getAll() {
    const URL = 'http://localhost:3010/api/pokemon';
    const data = this.http.get(URL);
    return data;
  }
}
