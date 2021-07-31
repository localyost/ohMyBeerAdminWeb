import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerPageRoutingModule } from './beer-page-routing.module';
import { BeerPageComponent } from './beer-page/beer-page.component';
import {MatTableModule} from "@angular/material/table";
import {CommonsModule} from "../../commons/commons.module";


@NgModule({
  declarations: [
    BeerPageComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    BeerPageRoutingModule,
    MatTableModule
  ]
})
export class BeerPageModule { }
