import { Component, OnInit } from '@angular/core';

import { PodcastService } from '../podcast.service';
import { PodcastItem } from '../podcast-item';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.scss'],
})
export class PodcastListComponent implements OnInit {

  podcastList$: Observable<PodcastItem[]> = of([]);
  elements: any;

  parser = new DOMParser();
  constructor(private podcastService: PodcastService) {}

  ngOnInit() {
    // this.podcastList$ = this.podcastService.getPodcastXml();
    this.podcastList$ = this.podcastService.getPodcasts();
    // this.podcastXml.subscribe((data: any) => {
    //   const domDoc = this.parser.parseFromString(data, 'text/xml');
    //   console.log(domDoc.getElementsByTagName('item').length);
    //   const itemCount = domDoc.getElementsByTagName('item').length;
    //   for (let i=2 ; i<=itemCount+0; i++) {
    //     console.log(domDoc.getElementsByTagName('title')[i].childNodes[0].textContent);
    //     console.log(domDoc.getElementsByTagName('description')[i].childNodes[0].textContent);
    //   }
    // })
  }
}
