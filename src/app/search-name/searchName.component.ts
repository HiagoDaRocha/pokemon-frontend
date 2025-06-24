// Importa o decorator Component do Angular para criar um componente
import { Component } from '@angular/core';

// Importa módulos comuns do Angular (ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';

// Importa o módulo de formulários para trabalhar com [(ngModel)] e formulários no template
import { FormsModule } from '@angular/forms';

// Importa o serviço responsável por fazer requisições à API dos Pokémons
import { PokemonService } from '../pokemon.service';

// Declaração do componente SearchNameComponent
@Component({
  selector: 'app-search', // Nome da tag HTML para usar este componente
  standalone: true, // Indica que este componente é independente (não depende de um módulo)
  imports: [CommonModule, FormsModule], // Importa os módulos necessários para o funcionamento do template
  templateUrl: './searchName.component.html', // Caminho para o arquivo de template HTML
  styleUrl: './searchName.component.css' // Caminho para o arquivo de estilos CSS
})
export class SearchNameComponent {

  // Variável para armazenar os dados do Pokémon retornados pela API
  pokemon: any;

  // Mensagem de erro que será exibida caso o Pokémon não seja encontrado
  errorMessage: string = '';

  // Variável que armazena o nome digitado pelo usuário no input
  name: string = '';

  // Injeta o serviço PokemonService dentro do componente para poder fazer requisições
  constructor(private pokemonService: PokemonService) { }

  // Função que faz a busca do Pokémon
  search() {
    // Pega o nome digitado, remove espaços e converte para minúsculo
    const Pokemon = this.name.trim().toLowerCase();

    // Exibe no console o nome que está sendo buscado
    console.log('Buscando Pokémon:', Pokemon);

    // Chama o método getPokemon do serviço, que retorna um Observable
    this.pokemonService.getPokemon(Pokemon).subscribe({
      // Se der certo (next), recebe os dados do Pokémon
      next: data => {
        console.log('Resposta da API:', data); // Mostra no console os dados recebidos
        this.pokemon = data; // Salva os dados na variável pokemon
        this.errorMessage = ''; // Limpa qualquer mensagem de erro
      },
      // Se der erro (error), executa este bloco
      error: err => {
        console.error('Erro na API:', err); // Mostra no console o erro
        this.pokemon = null; // Limpa o Pokémon anterior
        this.errorMessage = 'Pokémon não encontrado ou fora da primeira geração'; // Define uma mensagem de erro
      }
    });
  }

  // Função que retorna os tipos do Pokémon em formato de string, separados por vírgula
  getTipos(): string {
    // Verifica se existe pokemon e se possui types, mapeia os nomes dos tipos
    // Exemplo de retorno: "fire, flying"
    return this.pokemon?.types.map((t: any) => t.type.name).join(', ') ?? '';
  }

}
