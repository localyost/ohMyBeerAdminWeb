import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    DataTableComponent
  ],
  exports: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class ComponentsModule { }
