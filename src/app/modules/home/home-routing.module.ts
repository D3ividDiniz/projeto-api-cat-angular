import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from 'src/app/components/MainComponents/detalhes/detalhes.component';
import { FavoritosComponent } from 'src/app/components/MainComponents/favoritos/favoritos.component';
import { MainHomeComponent } from 'src/app/components/MainComponents/home/home.component';

const routes: Routes = [
  {path: '', component:MainHomeComponent},
  {path: 'detalhes/:id', component:DetalhesComponent},
  {path: 'favoritos', component:FavoritosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
