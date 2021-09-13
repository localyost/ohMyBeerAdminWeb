import {Component, OnInit} from '@angular/core';
import {BeerService} from "../services/beer.service";
import {Column} from "../../shared/components/data-table/Column";
import {Beer} from "../model/beer";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {BeerType} from "../model/beerType";

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor(private beerService: BeerService, public dialog: MatDialog) { }
  public data: Beer[] = [];
  public total = 0;

  public columns: Column[] = [
    {key: 'name', type: 'string', title: "Name" },
    {key: 'photos', title: "", templateName: 'image' },
    {key: 'beerTypes', templateName: 'beerTypes', title: "Bier Art"},
    {key: 'ibu', type: 'number', title: "IBU" },
    {key: 'gravity', type: 'percent', title: "Stammwurz" },
    {key: 'alcoholContent', type: 'percent', title: "Alcohol Content" },
    {key: 'color', type: 'string', title: "color" },
    {key: 'fermentation', type: 'string', title: "fermentation" },
  ];

  ngOnInit(): void {
    this.getBeers(0);
  }

  public displayBeerTypes(beerTypes: BeerType[]): string {
    return beerTypes.map(beerType => {
      return beerType.name;
    }).join(', ')
  }

  private getBeers(page: number) {
    const props = this.columns.map(value => value.key);
    this.beerService.fetchMany({page, props}).toPromise().then(response => {
      this.data = response.content;
      this.total = response.total;
    });
  }

  public onPage(pageEvent: PageEvent) {
    this.getBeers(pageEvent.pageIndex);
  }


}
