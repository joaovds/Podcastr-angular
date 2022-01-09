import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {}

  // headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  // obter episodios
  getEpisodes(): Observable<Episode[]> {
    return this.httpClient
      .get<Episode[]>(`${environment.apiUrl}/episodes`)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return throwError(() => error.error.message);
    } else {
      return throwError(
        () => `Error Code: ${error.status}, message: ${error.message}`
      );
    }
  }
}
