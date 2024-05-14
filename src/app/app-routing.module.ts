import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFilmComponent } from './components/lista-film/lista-film.component';
const routes: Routes = [ 
   { path: '', redirectTo: '/lista-film', pathMatch: 'full' }, // Redireziona alla lista dei film per il percorso vuoto
   { path: 'lista-film', component: ListaFilmComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
