import { Component, OnInit } from '@angular/core';
import { FilmPayload } from 'src/app/model/FilmPayload';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-programmazione-film',
  templateUrl: './programmazione-film.component.html',
  styleUrls: ['./programmazione-film.component.css']
})
export class ProgrammazioneFilmComponent implements OnInit{

  filmsInProgrammazione: FilmPayload[] = [];

  constructor(private filmService:FilmService){}

  ngOnInit(): void {
    this.filmService.getListaFilmProgrammati().subscribe((film)=>{
      this.filmsInProgrammazione = film;
      console.log(film)
    })
  }

  
  
}
