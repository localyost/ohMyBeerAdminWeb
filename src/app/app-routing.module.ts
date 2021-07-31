import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: 'breweries', loadChildren: () => import('./brewery-page/brewery-page.module').then(m => m.BreweryPageModule) },
  { path: 'beer', loadChildren: () => import('./beer-page/beer-page.module').then(m => m.BeerPageModule) }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
//ng generate module customers --route customers --module app.module
