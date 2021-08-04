import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DataTableComponent} from "./components/data-table/data-table.component";
import {MaterialDesignModule} from "./material-design/material-design.module";


@NgModule({
  declarations: [
    DataTableComponent,
  ],
  exports: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
  ]
})
export class SharedModule { }
