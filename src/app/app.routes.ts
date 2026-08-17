import { Routes } from "@angular/router";
import { authGuard } from "./core/auth.guard";
import { adminGuard } from "./core/admin.guard";

export const routes: Routes = [
    {
        path:'', //!rota para raiz localhost:4200/
        loadComponent:() =>
            import ('./features/home/home/home')
        .then((m) => m.Home),
    },

    {
        path:'produtos', //!rota para raiz localhost:4200/produtos
        loadComponent:() =>
            import ('./features/produtos/lista-produtos/lista-produtos')
        .then((m) => m.ListaProdutos),
    },

    {
        path:'carrinho', //!rota para raiz localhost:4200/carrinho
        canActivate: [authGuard],
        loadComponent:() =>
            import ('./features/carrinho/carrinho/carrinho')
        .then((m) => m.Carrinho),
    },
    
    {
        path:'checkout',
        loadComponent: () => 
              import('./features/checkout/checkout/checkout')
        .then((m)=> m.Checkout),
    },

    {
        path: 'admin',
        canActivate: [adminGuard],
        loadComponent: () => import('./features/admin/admin/admin').then((m) => m.Admin),
    },

    {
        path: 'login',
        loadComponent: () => import('./features/login/login/login').then((m) => m.Login),
    },
    
    {
        path:'acesso-negado',
        loadComponent: () => import('./features/acesso-negado/acesso-negado/acesso-negado').then((m) => m.AcessoNegado),
    },
    

  
  {
        path:'**',
        redirectTo:'',
    },
];