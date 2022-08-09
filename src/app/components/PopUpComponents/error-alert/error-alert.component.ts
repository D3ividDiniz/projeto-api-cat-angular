import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alert-erro',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.sass']
})
export class ErrorAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() errValue: string;

}
