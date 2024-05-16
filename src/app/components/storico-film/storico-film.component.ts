import { Component, OnInit } from '@angular/core';
import { FilmPayload } from 'src/app/model/FilmPayload';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-storico-film',
  templateUrl: './storico-film.component.html',
  styleUrls: ['./storico-film.component.css']
})
export class StoricoFilmComponent implements OnInit {

  filmStorico: FilmPayload[] = [];
  dataInizio!: string;
  dataFine!: string;

  constructor(private filmService:FilmService){}

  ngOnInit(): void {
  this.listaStoricoFilm();
  } 

  listaStoricoFilm(){
    this.filmService.getListaFilmStorico().subscribe((film)=>{
      this.filmStorico = film;
    })
  }

  cercaPerData() {
    if (this.dataInizio) {
      this.filmService.filterFilmData(this.dataInizio, this.dataFine).subscribe(films => {
        this.filmStorico = films;
      });
    }
  }
  reset(){
    this.listaStoricoFilm();
    this.dataInizio = ''
    this.dataFine = ''
  }

}
