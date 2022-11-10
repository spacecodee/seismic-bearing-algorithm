import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OneFormulaComponent} from "./pages/one-formula/one-formula.component";

const routes: Routes = [
  {
    path: '',
    component: OneFormulaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulasRoutingModule {
}
