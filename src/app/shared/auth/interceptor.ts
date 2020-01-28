import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { environment } from 'src/environments/environment';

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
        },
        error => {
            this.token = null;
        }
        );
        
    if (this.token == null) {
        this.token = environment.token;
    } 
    // caso o token não seja barrado pelo cors, pode usar o ('Authorization': this.token), na chamada abaixo
    request = request.clone({
        setHeaders: {
            
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
        
    return next.handle(request);
        
    }
}