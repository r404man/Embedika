import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import Anime, { Query } from '../interfaces/Anime';
import { Apollo, gql } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private apollo: Apollo) { }

  getAnimesByCategory(category: string) {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query ($id: Int, $page: Int = 1, $perPage: Int = 7, $search: String) {
        Page (page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (id: $id, search: $search, genre: "${category}") {
            id
            status
            genres
            title {
              english
            }
          }
          }
        }
      `
    })
  }

  getAnimes() {
    return this.apollo.watchQuery<Query>({
      query: gql`
        query ($id: Int, $page: Int = 1, $perPage: Int = 7, $search: String) {
        Page (page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (id: $id, search: $search) {
            id
            status
            genres
            title {
              english
            }
          }
          }
        }
      `
    })

  }
}
