import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Episode } from '../../models/episode';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
