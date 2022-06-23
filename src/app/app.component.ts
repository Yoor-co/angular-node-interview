import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemons.service';
import { TPokemon } from './type/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'app';

  pokemons: TPokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getAll().subscribe((data: any) => {
      this.pokemons = data.collections;
    });
  }
}
