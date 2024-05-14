import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammazioneFilmComponent } from './programmazione-film.component';

describe('ProgrammazioneFilmComponent', () => {
  let component: ProgrammazioneFilmComponent;
  let fixture: ComponentFixture<ProgrammazioneFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammazioneFilmComponent]
    });
    fixture = TestBed.createComponent(ProgrammazioneFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
