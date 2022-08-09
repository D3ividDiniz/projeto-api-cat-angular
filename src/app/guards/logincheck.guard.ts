import { Injectable } from '@angular/core';
import { Router, RouterModule, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
RouterModule

@Injectable({
  providedIn: 'root'
})
export class LogincheckGuard implements CanLoad {

    constructor(private router: Router) {}

    canLoad(): Observable<boolean>|Promise<boolean>|boolean {
      if(!!localStorage.getItem('loginCheckedDesk')){
        return true
      }
      this.router.navigate(['/']);
      return true
    }
  }





