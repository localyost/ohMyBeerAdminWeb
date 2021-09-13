import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DataTableComponent} from "./components/data-table/data-table.component";
import {MaterialDesignModule} from "./material-design/material-design.module";
import {RouterModule} from "@angular/router";
import {FileUploadComponent} from './components/file-upload/file-upload.component';
import {FormsModule} from "@angular/forms";
import {TemplateNameDirective} from './components/data-table/template-name.directive';


@NgModule({
  declarations: [
    DataTableComponent,
    FileUploadComponent,
    TemplateNameDirective,
  ],
    exports: [
        DataTableComponent,
        FileUploadComponent,
        TemplateNameDirective
    ],
    imports: [
        CommonModule,
        MaterialDesignModule,
        RouterModule,
        FormsModule
    ]
})
export class SharedModule { }
