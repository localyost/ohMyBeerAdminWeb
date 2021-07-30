import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../core/data/http.service";
import {BreweryService} from "../../core/data/Brewery/brewery.service";

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {

  constructor(private breweryService: BreweryService) { }

  ngOnInit(): void {
    this.breweryService.getAll(1);
  }

}
