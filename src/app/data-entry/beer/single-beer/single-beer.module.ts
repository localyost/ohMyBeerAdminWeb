import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleBeerRoutingModule } from './single-beer-routing.module';
import { SingleBeerComponent } from './single-beer.component';


@NgModule({
  declarations: [
    SingleBeerComponent
  ],
  imports: [
    CommonModule,
    SingleBeerRoutingModule
  ]
})
export class SingleBeerModule { }
