import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
//import { Produto } from './components/produto/produto';
//import { UpperCasePipe } from '@angular/common';
//import { Produto } from "./features/produtos/produto/produto";
//import { usuarioLogado, login, logout } from './core/auth';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Header } from './shared/layout/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatCardModule,MatButtonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');

  nomeLoja = 'cyber engenharia';
}
