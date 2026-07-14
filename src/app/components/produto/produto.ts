import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
//Adiciona variaveis e condições do produto
export class Produto {
  produto = 'Notebook Gamer';
  preco = 7099.99; //preco = preço
  mostrarProduto = true;
  mostrarPreco = true;
  produtos =[
    {nome: 'Teclado' , preco:45.50},
    {nome: 'Mouse' , preco:36.70},
    {nome: 'Monitor' , preco:980.00}
  ];
}
