import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: 'data-entry', loadChildren: () => import('./data-entry/data-entry.module').then(m => m.DataEntryModule) }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
//ng generate module customers --route customers --module app.module
