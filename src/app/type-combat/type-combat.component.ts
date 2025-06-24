// Importa o decorator Component do Angular
import { Component } from '@angular/core';

// Importa módulos comuns do Angular (ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';

// Importa o FormsModule para trabalhar com formulários e [(ngModel)]
import { FormsModule } from '@angular/forms';

// Importa o serviço responsável por fazer as requisições para a API dos tipos de Pokémon
import { PokemonService } from '../pokemon.service';

// Declaração do componente TypeCombatComponent
@Component({
  selector: 'app-type-combat', // Nome da tag HTML que representa este componente
  standalone: true, // Define que este componente não depende de um módulo (é independente)
  imports: [CommonModule, FormsModule], // Importa módulos necessários para o template funcionar corretamente
  templateUrl: './type-combat.component.html', // Caminho do arquivo de template HTML
  styleUrl: './type-combat.component.css' // Caminho do arquivo CSS de estilos
})
export class TypeCombatComponent {
  
  // Variável para armazenar as informações retornadas da API sobre o tipo
  typeInfo: any;

  // Mensagem de erro caso o tipo não seja encontrado ou dê problema na requisição
  errorMessage: string = '';

  // Nome (tipo) digitado pelo usuário no input
  name: string = '';

  // Injeta o serviço PokemonService para fazer requisições à API
  constructor(private pokemonService: PokemonService) { }

  // Função que realiza a busca das informações do tipo
  search() {
    // Pega o nome digitado, remove espaços e converte para minúsculo
    const type = this.name.trim().toLowerCase();

    console.log('Buscando tipo:', type); // Log para debug no console

    // Faz a requisição para o serviço
    this.pokemonService.getTypeCombat(type).subscribe({
      // Se der certo (next), executa este bloco
      next: data => {
        console.log('Resposta da API:', data); // Exibe os dados no console
        this.typeInfo = data; // Salva os dados na variável typeInfo
        this.errorMessage = ''; // Limpa qualquer mensagem de erro anterior
      },
      // Se der erro (error), executa este bloco
      error: err => {
        console.error('Erro na API:', err); // Exibe o erro no console
        this.typeInfo = null; // Limpa os dados anteriores
        this.errorMessage = 'Tipo não encontrado ou inválido'; // Define uma mensagem de erro
      }
    });
  }

  // Função auxiliar que remove acentos de uma string (útil se quiser tratar entradas com acentuação)
  removeAcentos(text: string): string {
    // Normaliza a string e remove caracteres de acentuação
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
}
