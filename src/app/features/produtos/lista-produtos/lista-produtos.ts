import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { signal } from '@angular/core';
import {computed} from '@angular/core';
import { PrecoFormatadoPipe } from '../../../pipes/preco-formatado-pipe';
@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  
  //!LISTA COM DADOS
  produtos = signal ( [
    {nome: ' Cadeira gamer', preco: 399.99},
    {nome: ' Processador devx', preco: 344.50},
    {nome: ' Monitor Dell', preco: 1789.90},
    {nome: ' CPU ordexx', preco: 455.89}
  ]);
  //!FUNÇÃO PARA EXIBIR PRODUTOS SELECIONADOS PELO USUARIO NO CONSOLE
  exibirProduto (nome: string){console.log('Produto Selecionado:',nome );
  }
  //FUNÇÃO ADICIONA PRODUTO USANDO METODO UPDATE
adicionarProduto (){
  this.produtos.update(listaAtual => [...listaAtual,
    {nome:'PlayStation 5', preco: 3500},
    {nome:'BIELZIM', preco: 9999}
  ]);
}
//FUNÇÃO QUE CONTABILIZA A QUANTIDADE DE ITENS DA LISTa
totalProdutos = computed (()=> this.produtos().length);

//!FUNÇÃO CALCULA O VALOR TOTAL DOS PRODUTOS USANDO METODO COMPUTED
valorTotal = computed(()=> 
 {return this.produtos().reduce((total, item) =>
total + item.preco,0)});

}
