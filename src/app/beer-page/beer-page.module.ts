import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerPageRoutingModule } from './beer-page-routing.module';
import { BeerPageComponent } from './beer-page/beer-page.component';


@NgModule({
  declarations: [
    BeerPageComponent
  ],
  imports: [
    CommonModule,
    BeerPageRoutingModule
  ]
})
export class BeerPageModule { }
