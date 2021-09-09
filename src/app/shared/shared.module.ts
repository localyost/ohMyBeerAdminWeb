import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DataTableComponent} from "./components/data-table/data-table.component";
import {MaterialDesignModule} from "./material-design/material-design.module";
import {RouterModule} from "@angular/router";
import {FileUploadComponent} from './components/file-upload/file-upload.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DataTableComponent,
    FileUploadComponent,
  ],
    exports: [
        DataTableComponent,
        FileUploadComponent
    ],
    imports: [
        CommonModule,
        MaterialDesignModule,
        RouterModule,
        FormsModule
    ]
})
export class SharedModule { }
