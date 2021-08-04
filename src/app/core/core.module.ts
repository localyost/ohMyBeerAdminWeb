import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MaterialDesignModule} from "../shared/material-design/material-design.module";
import {DataEntryRoutingModule} from "../data-entry/data-entry-routing.module";


@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    DataEntryRoutingModule
  ],
})
export class CoreModule { }
