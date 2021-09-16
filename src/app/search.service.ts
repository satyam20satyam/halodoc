import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private readonly http: HttpClient) {}
  halodicsSearchURLs: string = 'http://hn.algolia.com/api/v1/search';
  halodocDetailsUrls: string = 'http://hn.algolia.com/api/v1/users/';
  wikiSearchURLs: string =
    'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=halodoc&origin=';

  search(val: any, source: string) {
    const url =
      source === 'wiki' ? this.wikiSearchURLs : this.halodicsSearchURLs;
    const params = { query: val };
    return this.http
      .get(url, { params })
      .pipe(map((res: any) => this.formatData(res?.hits, source)));
  }

  searchDetails(author: string) {
    const urls = this.halodocDetailsUrls + author;
    return this.http.get(urls).pipe(
      map((val) => {
        console.log('Data1 ', val);
        return val;
      })
    );
  }

  formatData(response: any, source?: string): any {
    console.log('Data ', response);
    return response.length
      ? response.map((obj: any) => {
          const { author, title, points: count } = obj;
          return { author, title, count };
        })
      : [];
  }
}
