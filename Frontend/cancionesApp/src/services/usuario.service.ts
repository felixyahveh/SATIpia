import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginDTO } from '../Models/LoginDTO';
import { Observable } from 'rxjs';
import { Usuario } from '../Models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private dataUrl = 'Usuario/';

  constructor(private http:HttpClient) { }

  public IniciarSesion(obj:loginDTO):Observable<Usuario[]>{
    return this.http.post<Usuario[]>(this.dataUrl+'IniciarSesion/',obj)
  }
}
