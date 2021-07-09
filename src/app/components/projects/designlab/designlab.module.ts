import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DesignLabComponent } from './designlab.component';
import { DesignLabRoutingModule } from './designlab.routing';

@NgModule({
  declarations: [DesignLabComponent],
  imports: [CommonModule, FlexLayoutModule, DesignLabRoutingModule],
})
export class DesignLabModule {}
