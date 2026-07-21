import { Routes } from '@angular/router';
import { Carrinho } from './features/carrinho/carrinho/carrinho';
import { ListaProdutos } from './features/produtos/lista-produtos/lista-produtos';
export const routes: Routes = [
    {
        path:'',
        component: ListaProdutos,
    },
     {
        path:'carrinho',
        component: Carrinho,
    },
];
