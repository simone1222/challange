import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoFilmComponent } from './storico-film.component';

describe('StoricoFilmComponent', () => {
  let component: StoricoFilmComponent;
  let fixture: ComponentFixture<StoricoFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoricoFilmComponent]
    });
    fixture = TestBed.createComponent(StoricoFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
