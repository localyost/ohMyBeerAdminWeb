import { Component } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oh! My Beer Admin Be(er)reich';
  public links = ['brewery', 'Second', 'Third'];
  public background: ThemePalette;
  activeLink = this.links[0];

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }
}
