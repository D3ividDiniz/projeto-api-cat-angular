import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'simple-alert',
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.sass']
})
export class SimpleAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() errValue: string;

}
