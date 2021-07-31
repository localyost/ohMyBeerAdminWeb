import {Component, Input, OnInit} from '@angular/core';
import {Column} from "./Column";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor() { }
  @Input()
  public dataSource = [];
  @Input()
  public columns: Column[] = [];
  private currentPage = 1;
  public displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(value => value.key);
  }

  public onTableScroll(e: any) {

    // this.currentPage++
    // this.dataSource = this.beerService.getAll(this.currentPage);
  }
}
