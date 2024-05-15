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
  dataInizio!: string;
  dataFine!: string;

  constructor(private filmService:FilmService){}

  ngOnInit(): void {
   this.listaFilmInProgrammazione();
  }

  listaFilmInProgrammazione(){
    this.filmService.getListaFilmProgrammati().subscribe((film)=>{
      this.filmsInProgrammazione = film;
      console.log(film)
    })
  }
  cercaPerData(): void {
    if (this.dataInizio && this.dataFine) {
      this.filmService.filterFilmData(this.dataInizio, this.dataFine).subscribe(films => {
        this.filmsInProgrammazione = films;
      });
    }
  }
  reset(){
    this.listaFilmInProgrammazione();
    this.dataInizio = ''
    this.dataFine = ''
  }
  
  
}
