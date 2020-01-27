import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    token: any = null;
    constructor(public storage: NativeStorage) {
    }

    // Pega o token para todas as requisições
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.storage.getItem('token').then(
            data => {
                this.token = data;
                console.log(this.token)
            },
            error => {
                this.token = null;
            }
        );

        if (this.token != null) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token}`
                }
            });
        }

        return next.handle(request);

    }
}