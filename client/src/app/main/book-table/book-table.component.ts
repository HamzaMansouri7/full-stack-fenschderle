import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {
  name: string;
  email: string;
  phone: number;
  date: Date;
  time: string; 
  people: number;
  message: string;
  constructor() { }

  ngOnInit(): void {
  }
  // sendEmail() {
   // var name = document.getElementById("name").value;s
   // var email = document.getElementById("email").value;
    //var body = document.getElementById("body").value;
   // var mailtoLink = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
   // window.location.href = mailtoLink;
  //}
  ;

  sendEmail() {
    const mailtoLink = `mailto:${this.name}?email=${this.email}&phone=${this.phone}&date=${this.date}&time=${this.time}&people=${this.people}&message=${this.message}`;
    window.location.href = mailtoLink;
  }

}
