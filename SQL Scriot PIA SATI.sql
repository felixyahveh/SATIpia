Create table Usuario (
    id int not null identity(1,1) primary key,
    nombre varchar(100),
    apellido varchar(100),
    nombreUsuario varchar(100) unique,
    contrasena varchar(100)
)


CREATE TABLE MusicaFavorita (
    id int not null identity(1,1) primary key,
    cancion varchar(100),
    artista varchar(100),
    idUsuario int,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id)
)

insert into Usuario (nombre,apellido,nombreUsuario,contrasena) values 
('Felix','Alanis','felix','12'),
('Ricardo','Herrera','richard','12'),
('Rocco','Gonzalez','rocco','12')

select * from Usuario

insert into MusicaFavorita (cancion,artista,idUsuario) values 
('Vivir asi es morir de amor','Nathy Peluso',1),
('Desvelado','Bobby Pulido',2),
('I kissed a girl','Katty Perry',3),
('The one that got aweay', 'Katy Perry',3),
('Que agonia','Yuridia',1),
('Diez pasos hacia ti', 'Daniel me estas matando',2),
('Sin ti','Los panchos',2),
('La nave del olvido','Jose Jose',2)

select * from MusicaFavorita

--Consultas Que se usan para la consulta de datos en la app
--El Login
SELECT * FROM Usuario WHERE nombreUsuario = 'felix' and contrasena = '12';

--El grid de canciones
SELECT * FROM MusicaFavorita WHERE cancion LIKE '%%' AND idUsuario = '1'