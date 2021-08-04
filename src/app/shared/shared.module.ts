import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DataTableComponent} from "./components/data-table/data-table.component";
import {MaterialDesignModule} from "./material-design/material-design.module";
import {RouterModule} from "@angular/router";


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
    RouterModule
  ]
})
export class SharedModule { }
