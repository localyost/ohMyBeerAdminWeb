import { Component, OnInit } from '@angular/core';
import {BeerService} from "../services/beer.service";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getMany(2).toPromise().then(r => console.log(r));
  }

}
