import { Component, OnInit } from '@angular/core';
import { MovieService, SearchType } from './../../services/movie.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) { }

  ngOnInit() { }
 
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

}
