import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    {nome: 'Cadeira gamer', preco: 399.99},
    {nome: 'Processador devx', preco: 344.50},
    {nome: 'Monitor Dell', preco: 1789.90}
  ];
}
