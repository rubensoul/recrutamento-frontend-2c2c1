import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  isLoggedIn = false;

  constructor(
    private storage: NativeStorage,
  ) { 
    // Pega o token fixo e manda pra função
    this.setToken(environment.token);
  }

  // Seta o token no storage do aplicativo para a persistencia com o interceptador
  setToken(token: any) {
    this.storage.setItem('token', token)
      .then(
        () => {
          console.log('Token Stored');
        },
        error => console.error('Error storing item', error)
      );
    this.token = token;
    this.isLoggedIn = true;
    return token;
  }

  // Pega o token para persistir
  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }

}
