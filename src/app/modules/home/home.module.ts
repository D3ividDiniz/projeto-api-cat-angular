import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from 'src/app/services/home.service';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HomeService]
})
export class HomeModule { }
