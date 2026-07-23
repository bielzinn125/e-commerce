import { Routes } from "@angular/router";
import { authGuard } from "./core/auth.guard";


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
        path:'**',
        redirectTo:'',
    },
];