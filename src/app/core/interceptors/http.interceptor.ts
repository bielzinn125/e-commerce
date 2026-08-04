import { HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";
import { catchError } from "rxjs";
import { throwError } from "rxjs";

export const httpInterceptor: HttpInterceptorFn = (req,next) => {
    console.log('Interceptando Requisição:' , req.url);
    //! aqui voce vai adicionar um token pra modificar requisição
    const token = 'fake-token-jwt';

    const novaReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`, 
        },
    });
    return next(novaReq).pipe(
        tap({
            next: (event) => console.log ('Responde: ', event),
            error: (error) => console.error ('Erro de Requisição', error),
        }),

        catchError((error) => {
            console.error('ERRO GLOBAL: ', error);
            if (error.status === 401) {
                console.warn('Usuário não autorizado!', error);
            }
            if (error.status === 500) {
                console.warn('Erro interno do serviço', error);
            }
            return throwError(() => error);
        }),
    );
};