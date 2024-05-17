using System;
namespace cancionesApi.Models
{
	public class MusicaFavorita
	{
		public int Id { get; set; }
		public string Cancion { get; set; }
		public string Artista { get; set; }
		public string IdUsuario { get; set; }
	}
}

