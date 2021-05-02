import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KausComponent } from './kaus.component';
import { KausRoutingModule } from './kaus.routing';

@NgModule({
  declarations: [KausComponent],
  imports: [CommonModule, FlexLayoutModule, KausRoutingModule],
})
export class KausModule {}
