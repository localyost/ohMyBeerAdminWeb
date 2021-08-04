import { Component, OnInit } from '@angular/core';
import {BeerService} from "../services/beer.service";
import {Column} from "../../shared/components/data-table/Column";
import {Beer} from "../module/beer";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor(private beerService: BeerService) { }
  public data: Beer[] = [];
  public total = 0;

  public columns: Column[] = [
    {key: 'name', type: 'string', title: "Name" },
    {key: 'beerType', type: 'string', title: "Bier Art" },
    {key: 'ibu', type: 'number', title: "IBU" },
    {key: 'gravity', type: 'percent', title: "Stammwurz" },
    {key: 'alcoholContent', type: 'percent', title: "Alcohol Content" }
  ];

  ngOnInit(): void {
    this.getBeer(0)
  }

  private getBeer(page: number) {
    this.beerService.getMany(page).toPromise().then(response => {
      this.data = response.content;
      this.total = response.total;
    });
  }

  public onPage(pageEvent: PageEvent) {
    this.getBeer(pageEvent.pageIndex);
  }

}
