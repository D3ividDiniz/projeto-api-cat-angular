import { LoginService } from 'src/app/services/login.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { info_img } from 'src/app/models/info-interface';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-main-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class MainHomeComponent implements OnInit{

  constructor(private serviceHome: HomeService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getCatsInitialized();
    this.filterOption = this.serviceHome.getUpdateCategories();
  }

  hasErro: any =  {err: '', tof: false};
  public imgs: any[] = [];
  public ids: any[] = [];
  public charging: boolean = true;
  filterOption:any;
  filterValue:string = 'false'

  updateFilter(){
    this.imgs = [];
    this.getCatsInitialized();
    this.charging = true;
    this.hasErro['tof'] = false;
  }

  getCatsInitialized(): void{
    this.ids = [];
    this.serviceHome.getCatImg(this.filterValue).subscribe(res=>{
      res.forEach(cat=>{
        this.ids.push(cat.id);
        let descLocal = " ";
        this.serviceHome.getDataInfo(cat.id).subscribe(resInfo=>{
          descLocal = resInfo.breeds[0].description;
          cat['description'] = descLocal;
        });
      })
      this.imgs = res
    });
  }

  favorite(imgData:info_img){
    // check saves existing
    if(!localStorage.getItem('saves'))
      localStorage.setItem('saves', '[]');

    //add data imgs to favorites
    let localImgDataFav = JSON.parse(localStorage.getItem('saves'));

    if(!!this.serviceHome.checkIdFavorite(imgData.id)){
      this.hasErro = this.loginService.showError('Você ja favoritou este gato ;/');

      setTimeout(()=>{
        this.hasErro['tof'] = false

      },2500)
    }else{
      localImgDataFav.push(imgData);
      localStorage.setItem('saves', JSON.stringify(localImgDataFav));
    }
  }



  @HostListener('window:scroll')
  onWindowScroll():void{
    if( document.documentElement.scrollTop + document.documentElement.clientHeight > document.documentElement.scrollHeight - 20 ){
      this.serviceHome.getCatImg(this.filterValue).subscribe(res=>{
        let cont = 0;

        res.forEach(cat=>{

          if((this.ids).indexOf(cat.id)>=0){

          }else{
          let descLocal = " ";
          this.serviceHome.getDataInfo(cat.id).subscribe(resInfo=>{
            descLocal = resInfo.breeds[0].description;
            cat['description'] = descLocal;
            this.imgs.push(cat);
            this.ids.push(cat.id);
          })};
      }
      )
      if(cont>1 || this.imgs.length < 10){
        this.hasErro = this.loginService.showError('Acabou-se os gatos :/');
        this.charging = false;
      }
  })
  }

}
}
