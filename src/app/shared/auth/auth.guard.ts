import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
      private router: Router,
      private authService: AuthService,
      private alertService: AlertService
    ) { }
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const currentUser = this.authService.isLoggedIn;
      if (currentUser) {
        // authorised so return true
        return true;
      }
      // not logged in so redirect to login page with the return url
      //this.router.navigate(['/home']);
      this.alertService.presentToast('Você não está autenticado!');
      return false;

    }
}
