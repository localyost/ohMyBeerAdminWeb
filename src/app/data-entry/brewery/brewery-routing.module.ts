import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryComponent } from './brewery.component';

const routes: Routes = [{ path: '', component: BreweryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreweryRoutingModule { }
