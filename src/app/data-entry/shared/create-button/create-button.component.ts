import {Component} from '@angular/core';

@Component({
  selector: 'app-create-button',
  template: '<button routerLink="create" mat-raised-button color="primary">create</button>',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent {

  constructor() { }

}
