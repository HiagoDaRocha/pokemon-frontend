// Importa o decorator Component do Angular para criar um componente
import { Component } from '@angular/core';

// Importa os módulos de roteamento necessários para navegação entre páginas
import { RouterModule, RouterOutlet } from '@angular/router';

// Declaração do componente principal da aplicação
@Component({
  selector: 'app-root', // Nome da tag HTML que representa este componente na aplicação (é a raiz)
  standalone: true, // Define que o componente é independente (não faz parte de um módulo)
  imports: [RouterOutlet, RouterModule], // Importa os módulos de roteamento para renderizar rotas filhas
  templateUrl: './app.component.html', // Caminho do arquivo HTML que define o layout do componente
  styleUrl: './app.component.css' // Caminho do arquivo CSS que define o estilo do componente
})
export class AppComponent {
  // Propriedade que define o título da aplicação, pode ser utilizada no HTML
  title = 'pokemon';
}
