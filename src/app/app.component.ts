import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Episode } from './models/episode';
import { EpisodesService } from './services/episodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  episodes: Episode[] = [];
  latestEpisodes: Episode[] = [];

  public constructor(
    private titleService: Title,
    private episodesService: EpisodesService
  ) {
    this.titleService.setTitle('Podcastr');
  }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.episodesService.getEpisodes().subscribe((episodes: Episode[]) => {
      this.episodes = episodes;
      this.latestEpisodes = episodes.slice(0, 2);
    });
  }
}
