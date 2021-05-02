import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects.routing';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, FlexLayoutModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
