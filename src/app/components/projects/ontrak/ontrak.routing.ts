import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OntrakComponent } from './ontrak.component';

const routes: Routes = [
  {
    path: '',
    component: OntrakComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OntrakRoutingModule {}
