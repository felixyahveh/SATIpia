using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using cancionesApi.Dtos;
using cancionesApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace cancionesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly string _connectionString;
        private readonly SqlConnection _connection;

        public UsuarioController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
            
        }

        // GET: api/values
        [HttpPost("IniciarSesion")]
        public IActionResult IniciarSesion(LogInDTO login)
        {
            List<Usuario> data = new List<Usuario>();
            var query = "SELECT * FROM Usuario WHERE nombreUsuario = '"+login.NombreUsuario +"' and contrasena = '"+login.contrasena +"'";
            using(SqlConnection connection = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                connection.Open();
                using(SqlDataReader reader = command.ExecuteReader())
                {
                    
                    while (reader.Read())
                    {
                        var user = new Usuario
                        {
                            Id = Int32.Parse(reader[0].ToString()),
                            Nombre = reader[1].ToString(),
                            Apellido = reader[2].ToString(),
                            NombreUsuario = reader[3].ToString(),
                            Contrasena = reader[4].ToString()
                        };
                        data.Add(user);
                        
                    }
                }
            }
            if(data.Count > 0)
            {
                return Ok(data);
            }
            else
            {
                return NotFound();
            }
            

        }

        /*
        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        */
    }
}

