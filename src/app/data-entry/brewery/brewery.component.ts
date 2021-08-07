import {Component, OnInit} from '@angular/core';
import {Column} from "../../shared/components/data-table/Column";
import {BreweryService} from "../services/brewery.service";
import {Brewery} from "../model/brewery";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {

  constructor(private breweryService: BreweryService) { }
  public data: Brewery[] = [];
  public total = 0;
  public columns: Column[] = [
    {type: 'string', key: 'name', title: 'name'}
  ];

  ngOnInit(): void {
    this.getBreweries(0);
  }

  private getBreweries(page: number) {
    const props = this.columns.map(value => value.key);
    this.breweryService.fetchMany({page, props}).toPromise().then(response => {
      this.data = response.content;
      this.total = response.total;

    })
  }

  public onPage(pageEvent: PageEvent) {
    this.getBreweries(pageEvent.pageIndex);
  }

}
