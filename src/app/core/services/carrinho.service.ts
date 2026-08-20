import { Injectable } from "@angular/core";
import { signal } from "@angular/core";
import { computed } from "@angular/core";
import { ItemCarrinho } from "../models/item-carrinho";

@Injectable({providedIn:  'root'
})

export class CarrinhoService {
// !Estado global
private carrinho = signal<ItemCarrinho[]>([]);

//? Seleção
itens = computed(() => this.carrinho());

quantidadeItens = computed(() => this.carrinho ().length);
totalItens = computed (() => 
this.carrinho().reduce((total, item ) => total + item.preco,0));

carrinhoVazio = computed(() => this.carrinho().length === 0);

// TODO: ações Adicionar Produtos
adicionar (produto: ItemCarrinho) {
    this.carrinho.update (lista => [
    ...lista, produto]);
}
//! Remove um item específico pelo índice.
removerPorIndice(indice: number) {
this.carrinho.update((listaAtual) =>
listaAtual.filter((_, index) => index !== indice)
);
}
// todo: ação de limpeza
limpar(){
    this.carrinho.set([]);
}

}
