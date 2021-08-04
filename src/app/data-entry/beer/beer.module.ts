import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRoutingModule } from './beer-routing.module';
import { BeerComponent } from './beer.component';
import { BeerService } from "../services/beer.service";
import {HttpService} from "../../core/services/http/http.service";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    BeerComponent
  ],
    imports: [
        CommonModule,
        BeerRoutingModule,
        SharedModule
    ],
  providers: [
    BeerService,
    HttpService
  ]
})
export class BeerModule { }
