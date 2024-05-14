import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
}
