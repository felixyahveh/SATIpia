import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { musicaFavoritaFormDTO } from '../Models/MusicaFavoritaFormDTO';
import { Observable } from 'rxjs';
import { MusicaFavorita } from '../Models/MusicaFavorita';

@Injectable({
  providedIn: 'root'
})
export class MusicaFavoritaService {
  private dataUrl = 'MusicaFavorita/';

  constructor(private http:HttpClient) { }

  public ObtenerMusicaFavorita(obj:musicaFavoritaFormDTO):Observable<MusicaFavorita[]>{
    return this.http.post<MusicaFavorita[]>(this.dataUrl+'obtenerMusicaFavorita/',obj)
  }
}
