import { Component, OnInit } from '@angular/core';
import { FilmPayload } from 'src/app/model/FilmPayload';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-storico-film',
  templateUrl: './storico-film.component.html',
  styleUrls: ['./storico-film.component.css']
})
export class StoricoFilmComponent implements OnInit {

  filmsInProgrammazione: FilmPayload[] = [];

  constructor(private filmService:FilmService){}

  ngOnInit(): void {
    this.filmService.getListaFilmStorico().subscribe((film)=>{
      this.filmsInProgrammazione = film;
      console.log(film)
    })
  } 

}
