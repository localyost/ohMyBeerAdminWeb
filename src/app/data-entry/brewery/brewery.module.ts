import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BreweryRoutingModule} from './brewery-routing.module';
import {BreweryComponent} from './brewery.component';
import {SharedModule} from "../../shared/shared.module";
import {BreweryService} from "../services/brewery.service";
import {HttpService} from "../../core/services/http/http.service";


@NgModule({
  declarations: [
    BreweryComponent
  ],
    imports: [
        CommonModule,
        BreweryRoutingModule,
        SharedModule
    ],
  providers: [BreweryService, HttpService]
})
export class BreweryModule { }
