import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OMDbResponse } from 'src/app/interfaces/omdb.interface';

@Injectable({ providedIn: 'root' })
export class OMDbService {
  constructor(private http: HttpClient) {}

  searchByTitle(value: string) {
    return this.http.get<OMDbResponse>(
      `http://www.omdbapi.com/?s=${value}&apikey=${environment.omdbApiKey}`
    );
  }

  subOMDbSearch(subReddit: string, search: string) {
    return this.http.get<OMDbResponse>(
      `https://www.reddit.com/r/${subReddit}/search.json?restrict_sr=on&q=${search}&sort=comment&limit=50`
    );
  }
}
