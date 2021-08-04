import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerComponent } from './beer.component';

const routes: Routes = [{ path: '', component: BeerComponent,
  children: [
    { path: 'create', loadChildren: () => import('./create/create.module').then(m => m.CreateModule) },
    { path: ':id', loadChildren: () => import('./single-beer/single-beer.module').then(m => m.SingleBeerModule) },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }
