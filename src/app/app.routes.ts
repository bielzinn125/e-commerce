import { Routes } from '@angular/router';
import { Carrinho } from './features/carrinho/carrinho/carrinho';
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';
import { Home } from './features/home/home/home';

export const routes: Routes = [
    {
        path:'', //!rota original/raiz
        component: Home,
    },
     {
        path:'Produtos',//! rota produtos
        component: ListaProdutos,
    },
    {
        path:'Carrinho',//!rota carrinho
        component: Carrinho,
    },
    {
        path:'**',//!rota redirecionada para a original
        redirectTo: '',
    },
];
