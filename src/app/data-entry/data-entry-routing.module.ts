import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataEntryComponent} from './data-entry.component';

const routes: Routes = [
  { path: 'data-entry', component: DataEntryComponent, children: [
      { path: 'beer', loadChildren: () => import('./beer/beer.module').then(m => m.BeerModule) },
      { path: 'brewery', loadChildren: () => import('./brewery/brewery.module').then(m => m.BreweryModule) },
      { path: 'ingredients', loadChildren: () => import('./ingredient/ingredient.module').then(m => m.IngredientModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataEntryRoutingModule { }
