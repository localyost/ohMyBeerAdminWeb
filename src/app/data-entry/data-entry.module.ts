import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataEntryRoutingModule } from './data-entry-routing.module';
import { DataEntryComponent } from './data-entry.component';
import {HttpService} from "../core/services/http/http.service";


@NgModule({
  declarations: [
    DataEntryComponent
  ],
  imports: [
    CommonModule,
    DataEntryRoutingModule
  ],
  providers: [
    HttpService,
  ]
})
export class DataEntryModule { }
