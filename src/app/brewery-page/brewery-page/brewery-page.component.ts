import { Component, OnInit } from '@angular/core';
import {BreweryService} from "../../../core/data/Brewery/brewery.service";

@Component({
  selector: 'app-brewery-page',
  templateUrl: './brewery-page.component.html',
  styleUrls: ['./brewery-page.component.css']
})
export class BreweryPageComponent implements OnInit {

  constructor(private breweryService : BreweryService) { }

  ngOnInit(): void {
    this.breweryService.getAll(2);
  }

}
