import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material-module';
import { Step1LoginComponent } from './components/LoginComponents/begin/step1-login.component';
import { MainHomeComponent } from './components/MainComponents/home/home.component';
import { CadastroComponent } from './components/LoginComponents/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/LoginComponents/login/login.component';
import { ErrorAlertComponent } from './components/PopUpComponents/error-alert/error-alert.component';
import { DetalhesComponent } from './components/MainComponents/detalhes/detalhes.component';
import { FavoritosComponent } from './components/MainComponents/favoritos/favoritos.component';
import { SimpleAlertComponent } from './components/PopUpComponents/simple-alert/simple-alert.component';
import { HeaderComponent } from './components/PopUpComponents/header/header.component';
import { BtnScrollComponent } from './components/PopUpComponents/btn-scroll/btn-scroll.component';
import { ErroComponent } from './components/MainComponents/erro/erro.component';


@NgModule({
  declarations: [
    AppComponent,
    Step1LoginComponent,
    MainHomeComponent,
    CadastroComponent,
    LoginComponent,
    ErrorAlertComponent,
    DetalhesComponent,
    FavoritosComponent,
    SimpleAlertComponent,
    HeaderComponent,
    BtnScrollComponent,
    ErroComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
