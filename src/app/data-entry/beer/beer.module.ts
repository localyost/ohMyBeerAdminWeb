import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRoutingModule } from './beer-routing.module';
import { BeerComponent } from './beer.component';
import { BeerService } from "../services/beer.service";
import {HttpService} from "../../core/services/http/http.service";
import {SharedModule} from "../../shared/shared.module";
import {MaterialDesignModule} from "../../shared/material-design/material-design.module";
import {DataEntryModule} from "../data-entry.module";


@NgModule({
  declarations: [
    BeerComponent
  ],
  imports: [
    CommonModule,
    BeerRoutingModule,
    SharedModule,
    MaterialDesignModule,
    DataEntryModule
  ],
  providers: [
    BeerService,
    HttpService
  ]
})
export class BeerModule { }
