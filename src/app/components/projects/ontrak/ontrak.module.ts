import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OntrakComponent } from './ontrak.component';
import { OntrakRoutingModule } from './ontrak.routing';

@NgModule({
  declarations: [OntrakComponent],
  imports: [CommonModule, FlexLayoutModule, OntrakRoutingModule],
})
export class OntrakModule {}
