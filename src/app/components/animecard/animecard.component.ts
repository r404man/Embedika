import { Component, Input, OnInit } from '@angular/core';
import Anime from 'src/app/interfaces/Anime';

@Component({
  selector: 'app-animecard',
  templateUrl: './animecard.component.html',
  styleUrls: ['./animecard.component.css']
})
export class AnimecardComponent implements OnInit {
  @Input() anime?: Anime;

  constructor() { }

  ngOnInit(): void {
  }

}
