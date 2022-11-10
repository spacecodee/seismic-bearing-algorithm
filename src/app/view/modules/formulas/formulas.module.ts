import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormulasRoutingModule} from './formulas-routing.module';
import {OneFormulaComponent} from "./pages/one-formula/one-formula.component";


@NgModule({
  declarations: [
    OneFormulaComponent
  ],
  imports: [
    CommonModule,
    FormulasRoutingModule
  ]
})
export class FormulasModule {
}
