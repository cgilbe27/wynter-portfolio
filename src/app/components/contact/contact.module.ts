import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, FlexLayoutModule, ContactRoutingModule],
})
export class ContactModule {}
