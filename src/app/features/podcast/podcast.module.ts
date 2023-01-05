import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { PodcastRoutingModule } from './podcast-routing.module';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { PodcastCardComponent } from './podcast-card/podcast-card.component';


@NgModule({
  declarations: [PodcastListComponent, PodcastCardComponent],
  imports: [CommonModule, PodcastRoutingModule, MatCardModule],
})
export class PodcastModule {}
