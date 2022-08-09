import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-scroll',
  templateUrl: './btn-scroll.component.html',
  styleUrls: ['./btn-scroll.component.sass']
})
export class BtnScrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTop(){
    window.scrollTo(0,0)
  }

}
