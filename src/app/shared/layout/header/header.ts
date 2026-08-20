import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {Router,RouterLink} from '@angular/router';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { inject } from '@angular/core';
import { AuthFacade } from '../../../core/facades/auth.facade';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'Cyber Engenharia';
  //* o Header deixa de acessar diretamente os services.
//* Agora ele consome facades, que simplificam o acesso ao carrinho e à autenticação.
private carrinhoFacade = inject(CarrinhoFacade);

private authFacade = inject(AuthFacade);

private router = inject(Router);

//* Sinais recebidos da facade do carrinho.
quantidade = this.carrinhoFacade.quantidade;

//* Sinais recebidos da facade de autenticação.
estaLogado = this.authFacade.estaLogado;

usuarioAtual = this.authFacade.usuarioAtual;

sair() {
//* Logout feito pela facade, não mais diretamente pelo service.
this.authFacade.logout();
this.router.navigateByUrl('/login');
}
}