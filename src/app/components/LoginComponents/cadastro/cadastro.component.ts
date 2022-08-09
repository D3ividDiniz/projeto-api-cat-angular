import { CadastroService } from '../../../services/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private serviceCadastro: CadastroService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.createCadastro();
  }
  hasErro: any =  {err: '', tof: false};
  formCadastro: FormGroup ;

  createCadastro(){
    this.formCadastro = this.formBuilder.group(
      {
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/)]]
      }
    )
  }
  submitForms(){
    if(!this.serviceCadastro.checkValidation(this.formCadastro)){
      this.hasErro = this.loginService.showError('Formato inválido');
      setTimeout(()=>{
        this.hasErro['tof'] = false
      },2500)}

    }
  }

