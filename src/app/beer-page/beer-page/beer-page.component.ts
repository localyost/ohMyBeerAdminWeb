import { Component, OnInit } from '@angular/core';
import {BeerService} from "../../../core/data/Beer/beer.service";
import {Column} from "../../../commons/components/data-table/Column";

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css']
})
export class BeerPageComponent implements OnInit {

  public dataSource = [];
  public columns: Column[] = [
    {title: 'name', type: 'string', key: 'name'},
    {title: 'fermentation', type: 'string', key: 'fermentation'},
  ];

  constructor(private beerService: BeerService) { }

  ngOnInit(): void {}


}
