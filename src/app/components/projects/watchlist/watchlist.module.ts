import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WatchlistComponent } from './watchlist.component';
import { WatchlistRoutingModule } from './watchlist.routing';

@NgModule({
  declarations: [WatchlistComponent],
  imports: [CommonModule, FlexLayoutModule, WatchlistRoutingModule],
})
export class WatchlistModule {}
