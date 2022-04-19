import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpHeaders } from '@angular/common/http'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';


import { AppComponent } from './app.component';
import { AnimelistComponent } from './components/animelist/animelist.component';
import { AnimecardComponent } from './components/animecard/animecard.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimelistComponent,
    AnimecardComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: `https://graphql.anilist.co`,
            method: "POST",
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            }),
          }),
        }
      },
      deps: [HttpLink],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
