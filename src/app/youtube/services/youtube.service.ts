import { mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IYoutubeSearch, IYoutubeVideo } from 'src/app/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private API_KEY = 'AIzaSyC0xL1_pW6C5Ke0Es3pJi9aEjILyhNPKII';
  constructor(private http: HttpClient) {}
  search(str: string) {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${this.API_KEY}&type=video&part=snippet&maxResults=15&q=${str}`;
    return this.http.get(url).pipe(
      mergeMap((result: IYoutubeSearch) => {
        const ids = result.items.map((item) => item.id.videoId);
        const urlVidieos = `https://www.googleapis.com/youtube/v3/videos?key=${
          this.API_KEY
        }&id=${ids.join(',')}&part=snippet,statistics`;
        return this.http.get(urlVidieos);
      }),
    );
  }

  searchOneItem(str: string) {
    const ids = [str];
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${this.API_KEY}&id=${ids.join(
      ',',
    )}&part=snippet,statistics`;
    return this.http.get(url);
  }
}
