import {Component} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public links = ['data-entry/beer', 'data-entry/brewery', 'Third'];
  public background: ThemePalette;
  activeLink = this.links[0];

  public toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
}
