import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataEntryRoutingModule } from './data-entry-routing.module';
import { DataEntryComponent } from './data-entry.component';
import {HttpService} from "../core/services/http/http.service";
import { CreateButtonComponent } from './shared/create-button/create-button.component';
import {MaterialDesignModule} from "../shared/material-design/material-design.module";


@NgModule({
  declarations: [
    DataEntryComponent,
    CreateButtonComponent
  ],
  imports: [
    CommonModule,
    DataEntryRoutingModule,
    MaterialDesignModule
  ],
  exports: [
    CreateButtonComponent
  ],
  providers: [
    HttpService,
  ]
})
export class DataEntryModule { }
