import { Component } from '@angular/core';
import { MusicaFavorita } from '../../../Models/MusicaFavorita';
import { musicaFavoritaFormDTO } from '../../../Models/MusicaFavoritaFormDTO';
import { MusicaFavoritaService } from '../../../services/musica-favorita.service';
import { NotificacionService } from '../../../services/notificacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  public musicasFavoritas: MusicaFavorita[]= []
  public musicaFavoritaForm:musicaFavoritaFormDTO ={
    cancion: '',
    idUsuario: localStorage.getItem('id') || '0'
  }

  constructor(private MusicaFavoritaService:MusicaFavoritaService,
              private NotificacionService: NotificacionService
  ){}

  ngOnInit(){
    this.obtenerMusicaFavorita();
  }

  obtenerMusicaFavorita(){
    this.MusicaFavoritaService.ObtenerMusicaFavorita(this.musicaFavoritaForm).subscribe(res => {
      this.musicasFavoritas = res;
      this.NotificacionService.addSuccess('Se hizo la busqueda exitosamente','Se han obetenido el listado de musicas favoritas exitosamente')
    }, erro => {
      this.NotificacionService.addDanger('Error','Ocurrio un error al momento de ejecutar la búsqueda, intentelo nuevamente')
    })
  }

}
