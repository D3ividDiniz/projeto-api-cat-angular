import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-step1-login',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.sass']
})
export class Step1LoginComponent implements OnInit {

  constructor(private serviceLogin: LoginService) { }

  ngOnInit(): void {
    this.checkUsers()
  }
  checkUsers(){
    if(!localStorage.getItem('Users')){
      localStorage.setItem('Users', '{}')
    }
  }
}
