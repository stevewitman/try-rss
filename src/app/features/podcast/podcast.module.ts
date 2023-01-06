import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { PodcastRoutingModule } from './podcast-routing.module';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastRowComponent } from './podcast-row/podcast-row.component';


@NgModule({
  declarations: [PodcastListComponent, PodcastRowComponent],
  imports: [CommonModule, PodcastRoutingModule, MatButtonModule],
})
export class PodcastModule {}
