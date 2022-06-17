import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {
  pokemons: any;
  constructor(
    private _pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
    console.log(this.pokemons, 'dasdas');
  }

  getPokemons() {
    const result = this._pokemonService.getPokemons().pipe().subscribe(pokes => {
      this.pokemons = pokes;
    })
  }

}
