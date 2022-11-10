import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormulasRoutingModule} from './formulas-routing.module';
import {OneFormulaComponent} from "./pages/one-formula/one-formula.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    OneFormulaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormulasRoutingModule,
    MatInputModule,
    FormsModule
  ]
})
export class FormulasModule {
}
