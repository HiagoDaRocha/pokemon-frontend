import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-type-combat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './type-combat.component.html',
  styleUrl: './type-combat.component.css'
})
export class TypeCombatComponent {
  typeInfo: any;
  errorMessage: string = '';
  name: string = '';

  constructor(private pokemonService: PokemonService) { }

  search() {
    const type = this.name.trim().toLowerCase();
    console.log('Buscando tipo:', type);

    this.pokemonService.getTypeCombat(type).subscribe({
      next: data => {
        console.log('Resposta da API:', data);
        this.typeInfo = data;
        this.errorMessage = '';
      },
      error: err => {
        console.error('Erro na API:', err);
        this.typeInfo = null;
        this.errorMessage = 'Tipo não encontrado ou inválido';
      }
    });
  }

  removeAcentos(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
}
