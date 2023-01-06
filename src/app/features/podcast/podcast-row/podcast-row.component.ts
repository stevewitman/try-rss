import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

import { PodcastItem } from '../podcast-item';

@Component({
  selector: 'app-podcast-row',
  templateUrl: './podcast-row.component.html',
  styleUrls: ['./podcast-row.component.scss'],
})
export class PodcastRowComponent {
  @Input() podcastItem: PodcastItem | undefined;
  descriptionCollapsed = true;
  expandButton = 'MORE';

  toggleDescriptionExpand() {
    this.descriptionCollapsed = !this.descriptionCollapsed;

    if (this.descriptionCollapsed) {
      this.expandButton = 'MORE';
    } else {
      this.expandButton = 'LESS';
    }
  }
}
