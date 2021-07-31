import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryPageComponent } from './brewery-page/brewery-page.component';

const routes: Routes = [{ path: '', component: BreweryPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreweryPageRoutingModule { }
