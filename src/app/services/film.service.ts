import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FilmPayload } from '../model/FilmPayload';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getListaFilmProgrammati(): Observable<FilmPayload[]> {
    return this.http.get<FilmPayload[]>('http://localhost:8080/api/film/listaFilmProgrammati');
  }

  getListaFilmStorico(): Observable<FilmPayload[]> {
    return this.http.get<FilmPayload[]>('http://localhost:8080/api/film/listaFilmStorico');
  }

  filterFilmData(dataInizio: string, dataFine: string): Observable<FilmPayload[]> {
    let params = new HttpParams();
    params = params.append('dataInizio', dataInizio);
    params = params.append('dataFine', dataFine);
    return this.http.get<FilmPayload[]>('http://localhost:8080/api/film/filmDate',{ params });
  }
}
