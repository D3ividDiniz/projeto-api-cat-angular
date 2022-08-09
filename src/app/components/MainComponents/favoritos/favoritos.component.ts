import { JSDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.sass']
})
export class FavoritosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getImgFavorite()
  }

  imgFavData:any[];

  getImgFavorite(){
    this.imgFavData = JSON.parse(localStorage.getItem('saves'));
  }
  tirarFav(id:string){
    let favoritos = JSON.parse(localStorage.getItem('saves'));
    let index = 0;
    favoritos.forEach((catSaved:any)=>{
      if(String(catSaved.id) == id){
        favoritos.splice(index , 1);
        localStorage.setItem('saves', JSON.stringify(favoritos));
        this.getImgFavorite();
      }
      index++;
    })
  }

}
