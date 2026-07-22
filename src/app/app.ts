import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
//import { Produto } from './components/produto/produto';
import { UpperCasePipe } from '@angular/common';
import { Produto } from "./features/produtos/produto/produto";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe, Produto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');

  nomeLoja = 'cyber engenharia';
}
