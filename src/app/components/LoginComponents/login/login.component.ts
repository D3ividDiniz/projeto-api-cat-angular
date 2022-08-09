import { LoginService } from '../../../services/login.service';
import { CadastroService } from '../../../services/cadastro.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.createCadastro();
  }

  hasErro: any =  {err: '', tof: false};;
  formLogin: FormGroup;

  createCadastro(){
    this.formLogin = this.formBuilder.group(
      {
        email: ['', Validators.required],
        senha: ['', Validators.required],
      }
    )
  }
  submitForms(){
    console.log(this.hasErro)
    if(!this.loginService.checkCadastro(this.formLogin.value)){
      this.hasErro = this.loginService.showError('Senha ou E-mail Incorretos');
      setTimeout(()=>{
        this.hasErro['tof'] = false
      },2500)

    };
  }

}
