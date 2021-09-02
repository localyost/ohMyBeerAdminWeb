import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeerComponent} from './beer.component';
import {EditBeerDialogEntryComponent} from "./edit-beer/edit-beer-dialog-entry.component";

const routes: Routes = [
  { path: '', component: BeerComponent, children: [
      {path: 'edit/:id', component: EditBeerDialogEntryComponent},
      {path: 'create', component: EditBeerDialogEntryComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }
