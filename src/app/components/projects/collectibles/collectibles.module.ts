import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CollectiblesComponent } from './collectibles.component';
import { CollectiblesRoutingModule } from './collectibles.routing';

@NgModule({
  declarations: [CollectiblesComponent],
  imports: [CommonModule, FlexLayoutModule, CollectiblesRoutingModule],
})
export class CollectiblesModule {}
