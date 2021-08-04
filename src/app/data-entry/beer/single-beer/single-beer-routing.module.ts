import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleBeerComponent } from './single-beer.component';

const routes: Routes = [{ path: '', component: SingleBeerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleBeerRoutingModule { }
