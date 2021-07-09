import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignLabComponent } from './designlab.component';

const routes: Routes = [
  {
    path: '',
    component: DesignLabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignLabRoutingModule {}
