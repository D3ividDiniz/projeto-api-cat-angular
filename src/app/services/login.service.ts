import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router ) { }
  // private fireAuth: AngularFireAuth
  dataErr:object = {err:null, tof: false};

  checkCadastro(a:any){
    let allUsersCad:any[] = JSON.parse(localStorage.getItem('Users'));

    for(let i = 0 ; i < allUsersCad.length ; i++){
      if(allUsersCad[i].email == a.email && allUsersCad[i].senha == a.senha){
        this.router.navigate(['/home']);
        return true
      }
    }
    return false
  }

  showError(err:string){
    this.dataErr['err'] = err;
    this.dataErr['tof'] = true;
    return(this.dataErr)

  }

}
