import { Component, OnInit, Input } from '@angular/core';
import {Customer, AppComponent} from './app.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  @Input() name: string;
  @Input() num: number;
  @Input() cust: Customer;
  @Input() appComponent: AppComponent;
  @Input() submitChange: string;
  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.

  }
}


