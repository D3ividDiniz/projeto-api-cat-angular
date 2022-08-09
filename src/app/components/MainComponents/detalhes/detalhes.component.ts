import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.sass']
})
export class DetalhesComponent implements OnInit {

  constructor(private router: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit(): void {
    this.getImageStorage();
    this.homeService.getDataInfo(this.imgDetail).subscribe(res=>{this.dataCatInfo=res; this.dataLoaded = true});
  }
  public dataLoaded:boolean = false;
  public imgDetail:string;
  dataCatInfo:any;

  getImageStorage(){
    this.imgDetail = this.router.snapshot.params['id'];
  }
}
