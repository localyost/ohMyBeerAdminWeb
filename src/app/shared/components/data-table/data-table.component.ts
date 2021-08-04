import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Column} from "./Column";
import {PageEvent} from "@angular/material/paginator";
import {PAGE_SIZE} from "../../../core/services/http/http.service";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input()
  public dataSource: any[] = [];
  @Input()
  public columns: Column[] = [];
  @Input()
  public total: number | undefined;
  @Output()
  public pageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  public pageSize = PAGE_SIZE;
  public displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(value => value.key);
    this.displayedColumns.push('actionButtons');
  }

  public onPage(pageEvent: PageEvent) {
    this.pageEvent.emit(pageEvent);
  }
}
