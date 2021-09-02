import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IngredientRoutingModule} from './ingredient-routing.module';
import {IngredientComponent} from './ingredient.component';
import {IngredientSelectsComponent} from './shared/ingredient-selects/ingredient-selects.component';
import {MaterialDesignModule} from "../../shared/material-design/material-design.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "../../core/services/http/http.service";
import {IngredientService} from "../services/ingredient.service";


@NgModule({
  declarations: [
    IngredientComponent,
    IngredientSelectsComponent
  ],
  exports: [
    IngredientSelectsComponent
  ],
  imports: [
    CommonModule,
    IngredientRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ],
  providers: [
    IngredientService,
    HttpService,
  ]
})
export class IngredientModule { }
