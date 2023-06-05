import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const storedUser: any = localStorage.getItem('user');
    const { user } = JSON.parse(storedUser);
    if (user && user.role && user.role == "admin") {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
