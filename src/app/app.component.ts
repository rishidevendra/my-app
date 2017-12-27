import { Component, OnInit } from '@angular/core';
import { isPending } from 'q';
import { NgForOf } from '@angular/common/src/directives/ng_for_of';
import { Directive } from '@angular/core/src/metadata/directives';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VSCode';
  number: Number;
  customer = new Customer();
  submitChange: string;
  appComponent = this;
  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.customer.name = 'dev';
    this.customer.city = 'pune';
    this.customer.mobileno = 12322;
    this.number = this.customer.mobileno;
  }
  submitForm( form: NgForm ) {
    this.submitChange = this.customer.name;
  }
}


export class Customer {
  name: string;
  mobileno: Number;
  city: string;
}
