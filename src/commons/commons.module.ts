import { NgModule } from '@angular/core';
import {ComponentsModule} from "./components/components.module";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [],
  exports: [ComponentsModule],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class CommonsModule { }
