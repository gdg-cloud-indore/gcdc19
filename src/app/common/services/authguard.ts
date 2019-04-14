import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CommanService } from '../services/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor
  (
    private auth: CommanService,
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.myRoute.navigate(["/"]);
      return false;
    }
  }
}