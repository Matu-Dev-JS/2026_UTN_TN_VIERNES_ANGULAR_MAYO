import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';

/* 
ACA SE DEFINE LA PARTE FUNCIONAL DEL COMPONENTE APP-ROOT 
Cada componente puede tener su 
  - Plantilla: templateUrl
  - Estilo: styleUrl
*/
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase-1');
}
