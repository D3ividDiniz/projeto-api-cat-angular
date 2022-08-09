import { LoginComponent } from '../../components/LoginComponents/login/login.component';
import { CadastroComponent } from '../../components/LoginComponents/cadastro/cadastro.component';
import { Step1LoginComponent } from '../../components/LoginComponents/begin/step1-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "", component: Step1LoginComponent},
  {path: "login", component: LoginComponent},
  {path: "cadastro", component: CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
