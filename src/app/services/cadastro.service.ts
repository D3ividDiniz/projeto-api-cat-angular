import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private router: Router) { }

  public Users:any[] = [];
  checkValidation(forms:any){
    if(forms.valid){
      localStorage.setItem('loginCheckedDesk', 'true');
      console.log(forms.value)
      this.Users.push(forms.value);
      console.log((this.Users))
      localStorage.setItem('Users', JSON.stringify(this.Users) )
      this.router.navigate(['/home'])
      return true
    }
    return false
  }
  

}
