import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { PodcastItem } from './podcast-item';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  #http = inject(HttpClient);
  PODCAST_RSS_URL = 'https://anchor.fm/s/d619eb74/podcast/rss';
  parser = new DOMParser();
  podcastItems: PodcastItem[] = [];

  getPodcastXml(): Observable<string> {
    // return this.#http.get(this.PODCAST_RSS_URL, {
    //   responseType: 'text',
    // });
    return this.#http.get('./assets/test.xml', { responseType: 'text' });
  }

  getPodcasts(): Observable<PodcastItem[]> {
    var subject = new Subject<PodcastItem[]>();
    this.getPodcastXml().subscribe((data: any) => {
      const podcastXml = this.parser.parseFromString(data, 'text/xml');
      const itemCount = podcastXml.getElementsByTagName('item').length;
      for (let i = 0; i < itemCount; i++) {
        let podcastItem: PodcastItem = {} as PodcastItem;
        const node = podcastXml.getElementsByTagName('item')[i];
        podcastItem.title =
          node.getElementsByTagName('title')[0].textContent || '';
        podcastItem.description =
          node.getElementsByTagName('description')[0].textContent || '';
        podcastItem.link =
          node.getElementsByTagName('link')[0].textContent || '';
        podcastItem.pubDate =
          Date.parse(node.getElementsByTagName('pubDate')[0].textContent || '').toString();
        podcastItem.audioUrl =
          node.getElementsByTagName('enclosure')[0].getAttribute('url') || '';
        podcastItem.duration =
          node.getElementsByTagName('itunes:duration')[0].textContent || '';
        podcastItem.season =
          node.getElementsByTagName('itunes:season')[0].textContent || '';
        podcastItem.episode =
          node.getElementsByTagName('itunes:episode')[0].textContent || '';
        this.podcastItems.push(podcastItem);
        // If last time through loop of items, next
        if (i === itemCount - 1) {
          subject.next(this.podcastItems.reverse());
        }
      }
    });
    return subject.asObservable();
  }
}
