import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchName.component.html',
  styleUrl: './searchName.component.css'
})
export class SearchNameComponent {
  pokemon: any;
  errorMessage: string = '';
  name: string = '';

  constructor(private pokemonService: PokemonService) { }

search() {
  const Pokemon = this.name.trim().toLowerCase();
  console.log('Buscando Pokémon:', Pokemon);

  this.pokemonService.getPokemon(Pokemon).subscribe({
    next: data => {
      console.log('Resposta da API:', data);
      this.pokemon = data;
      this.errorMessage = '';
    },
    error: err => {
      console.error('Erro na API:', err);
      this.pokemon = null;
      this.errorMessage = 'Pokémon não encontrado ou fora da primeira geração';
    }
  });
}


  getTipos(): string {
    return this.pokemon?.types.map((t: any) => t.type.name).join(', ') ?? '';
  }

  
}
