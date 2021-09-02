import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BeerRoutingModule} from './beer-routing.module';
import {BeerComponent} from './beer.component';
import {BeerService} from "../services/beer.service";
import {HttpService} from "../../core/services/http/http.service";
import {SharedModule} from "../../shared/shared.module";
import {MaterialDesignModule} from "../../shared/material-design/material-design.module";
import {DataEntryModule} from "../data-entry.module";
import {EditBeerComponent} from './edit-beer/edit-beer.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {BreweryService} from "../services/brewery.service";
import {BreweryModule} from "../brewery/brewery.module";
import {IngredientModule} from "../ingredient/ingredient.module";


@NgModule({
  declarations: [
    BeerComponent,
    EditBeerComponent
  ],
    imports: [
        CommonModule,
        BeerRoutingModule,
        SharedModule,
        MaterialDesignModule,
        DataEntryModule,
        ReactiveFormsModule,
        BreweryModule,
        IngredientModule,
    ],
  providers: [
    BeerService,
    BreweryService,
    HttpService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class BeerModule { }
