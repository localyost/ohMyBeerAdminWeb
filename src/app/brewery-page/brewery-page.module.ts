import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreweryPageRoutingModule } from './brewery-page-routing.module';
import { BreweryPageComponent } from './brewery-page/brewery-page.component';


@NgModule({
  declarations: [
    BreweryPageComponent
  ],
  imports: [
    CommonModule,
    BreweryPageRoutingModule
  ]
})
export class BreweryPageModule { }
