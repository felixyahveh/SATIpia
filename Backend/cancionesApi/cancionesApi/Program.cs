var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors(options =>
{
    options.AllowAnyOrigin(); // Permite cualquier origen
    options.AllowAnyHeader(); // Permite cualquier header
    options.AllowAnyMethod(); // Permite cualquier m�todo HTTP
});

app.Run();

