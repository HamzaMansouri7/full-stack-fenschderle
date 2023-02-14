import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  private readonly newProperty = 'app-order';

  constructor() { }

  ngOnInit(): void {
  }

}
