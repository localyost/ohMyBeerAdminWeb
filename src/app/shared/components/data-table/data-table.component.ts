import {Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef} from '@angular/core';
import {Column} from "./Column";
import {PageEvent} from "@angular/material/paginator";
import {PAGE_SIZE} from "../../../core/services/http/http.service";
import {TemplateNameDirective} from "./template-name.directive";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @ContentChildren(TemplateNameDirective)
  private _templates?: QueryList<TemplateNameDirective>

  get templates(): {[key: string] : TemplateRef<any>} {
    if (this._templates) {
      const columnTemplates: {[key: string] : TemplateRef<any>} = {};

      for (const columnDefinition of this._templates.toArray()) {
        if (columnDefinition.templateName) {
          columnTemplates[columnDefinition.templateName] = columnDefinition.template;
        }
      }
      return columnTemplates;
    }
    return {};
  }

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
