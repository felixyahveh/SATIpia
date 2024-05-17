using System;
using System.Data.SqlClient;
using cancionesApi.Dtos;
using cancionesApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace cancionesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusicaFavoritaController : ControllerBase
    {
        private readonly string _connectionString;
        private readonly SqlConnection _connection;

        public MusicaFavoritaController(IConfiguration configuration)
		{
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        [HttpPost("obtenerMusicaFavorita")]
        public IActionResult ObtenerMusicaFavorita(MusicaFavoritaFormDTO musicaDTO)
        {
            Console.WriteLine("drmird");
            List<MusicaFavorita> data = new List<MusicaFavorita>();
            var query = "SELECT * FROM MusicaFavorita WHERE cancion LIKE '%"+musicaDTO.Cancion+"%' AND idUsuario = '"+musicaDTO.IdUsuario+"';";
            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader())
                {

                    while (reader.Read())
                    {
                        var music = new MusicaFavorita
                        {
                            Id = Int32.Parse(reader[0].ToString()),
                            Cancion = reader[1].ToString(),
                            Artista = reader[2].ToString(),
                            IdUsuario = Int32.Parse( reader[3].ToString())
                        };
                        data.Add(music);

                    }
                }
            }
            return Ok(data);
        }
    }
}

