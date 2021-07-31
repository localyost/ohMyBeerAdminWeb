import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerPageComponent } from './beer-page/beer-page.component';

const routes: Routes = [{ path: '', component: BeerPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerPageRoutingModule { }
