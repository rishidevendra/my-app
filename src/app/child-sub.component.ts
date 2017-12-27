import { Component, OnInit, Input } from '@angular/core';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'child-sub',
  templateUrl: './child-sub.component.html'
})
export class ChildSubComponent implements OnInit {
  @Input() name: string;

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.

  }
}


