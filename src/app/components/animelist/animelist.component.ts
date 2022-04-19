import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable, tap } from 'rxjs';
import Anime, { Query } from 'src/app/interfaces/Anime';
import { AnimeService } from 'src/app/services/anime.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-animelist',
  templateUrl: './animelist.component.html',
  styleUrls: ['./animelist.component.css']
})
export class AnimelistComponent implements OnInit {
  animes?: Observable<Anime[]>;

  constructor(private animeService: AnimeService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.data.subscribe(data => {
      this.animes = this.animeService.getAnimesByCategory(data).valueChanges
        .pipe(
          map(res => res.data.Page.media)
        )
    });


    this.animes = this.animeService.getAnimes().valueChanges.pipe(
      map(result => result.data.Page.media)
    );
  }

}
