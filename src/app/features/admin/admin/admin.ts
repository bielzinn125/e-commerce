import { Component } from '@angular/core';
import { computed, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-admin',
  imports: [MatAnchor],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  private router = inject(Router);
  private authService = inject(AuthService);

  totalProdutosCadastrados = signal(30);
  pedidosPendentes = signal(6);
  usuariosCadastrados = signal(7);

  usuarioAtual = this.authService.usuarioAtual;

  areaPerfil = computed(() =>{
    const usuario = this.usuarioAtual();

    if(!usuario){
      return `Nenhum usuário autenticado`
    }
    return `Usuário autenticado como: ${usuario.perfil}`;
  });

  sair(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}