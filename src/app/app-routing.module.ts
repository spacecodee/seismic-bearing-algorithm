import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./view/modules/app/app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'formulas',
    loadChildren: () => import('./view/modules/formulas/formulas.module').then(m => m.FormulasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
