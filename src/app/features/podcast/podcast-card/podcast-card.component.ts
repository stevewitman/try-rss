import { Component, Input } from '@angular/core';
import { PodcastItem } from '../podcast-item';

@Component({
  selector: 'app-podcast-card',
  templateUrl: './podcast-card.component.html',
  styleUrls: ['./podcast-card.component.scss']
})
export class PodcastCardComponent {
  @Input() podcastItem: PodcastItem | undefined;
}
