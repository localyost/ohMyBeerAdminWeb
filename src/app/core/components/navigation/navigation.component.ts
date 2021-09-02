import {Component} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public background: ThemePalette;

}
