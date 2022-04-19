import { Component} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  genreFilters: string[] = [
    "Comedy", "Drama", "Adventure", "Sci-Fi", "Horror", "Mystery"
  ]

  constructor(private dataService: DataService) { }

  filterByGenre(genre: string) {
    this.dataService.sendData(genre);
  }
}
