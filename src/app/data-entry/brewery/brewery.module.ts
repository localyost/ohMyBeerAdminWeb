import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BreweryRoutingModule} from './brewery-routing.module';
import {BreweryComponent} from './brewery.component';
import {SharedModule} from "../../shared/shared.module";
import {BreweryService} from "../services/brewery.service";
import {HttpService} from "../../core/services/http/http.service";
import {BrewerySearchComponent} from './shared/brewery-search/brewery-search.component';
import {MaterialDesignModule} from "../../shared/material-design/material-design.module";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BreweryComponent,
    BrewerySearchComponent
  ],
    imports: [
        CommonModule,
        BreweryRoutingModule,
        SharedModule,
        MaterialDesignModule,
        ReactiveFormsModule
    ],
  exports: [
    BrewerySearchComponent
  ],
  providers: [
    BreweryService,
    HttpService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class BreweryModule { }
