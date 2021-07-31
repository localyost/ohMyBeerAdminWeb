import { Component, OnInit } from '@angular/core';
import {BeerService} from "../../../core/data/Beer/beer.service";

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css']
})
export class BeerPageComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getAll(2);
  }

}
