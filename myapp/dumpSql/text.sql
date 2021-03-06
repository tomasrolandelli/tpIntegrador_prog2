CREATE DATABASE proyecto_integrador;
USE proyecto_integrador;

CREATE TABLE usuarios(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre_usuario VARCHAR(30) UNIQUE NOT NULL,
email VARCHAR(120) UNIQUE NOT NULL,
contrasenia VARCHAR(200) NOT NULL,
foto VARCHAR(150) NULL,
fecha DATETIME NOT NULL,
numerico INT NOT NULL,
fecha_de_nacimiento DATETIME,
update_at DATETIME
);
CREATE TABLE posteos(
id INT PRIMARY KEY AUTO_INCREMENT,
userId INT NOT NULL,
foto VARCHAR(150) NOT NULL,
description VARCHAR(250),
fecha DATETIME NOT NULL,
update_at DATETIME,
FOREIGN KEY (userId) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
id INT PRIMARY KEY AUTO_INCREMENT,
userId INT NOT NULL,
postId INT NOT NULL,
comentario VARCHAR(250),
fecha DATETIME NOT NULL,
FOREIGN KEY (postId) REFERENCES posteos(id),
FOREIGN KEY (userId) REFERENCES usuarios(id)
);
INSERT INTO usuarios VALUES (DEFAULT, "messi10", "messidios10@gmail.com", "Messigod", 'fotoMessi.webp', "2020-01-01 23:40:50", 1, null, null);
INSERT INTO usuarios VALUES (DEFAULT, "CR7", "elBicho@gmail.com", "cristianito", 'fotoCris.jpg', "2020-07-03 20:15:20", 2, null, null);
INSERT INTO usuarios VALUES (DEFAULT, "mbappe777", "kilian@gmail.com", "KilianDios", 'fotoMba.webp', "2019-04-07 02:30:50", 3, null, null);
INSERT INTO usuarios VALUES (DEFAULT, "neymarJR", "ney@gmail.com", "brasileroSoy", 'fotoNey.webp', "2020-10-23 17:23:20", 4, null, null);
INSERT INTO usuarios VALUES (DEFAULT, "lewangol", "robert@gmail.com", "lewangolski", 'fotoLewa.jpg', "2019-02-11 12:22:33", 5, null, null);
UPDATE usuarios
SET foto = 'fotoMessi.webp'
WHERE id= 1;
UPDATE usuarios
SET foto = 'fotoCris.jpg'
WHERE id= 2;
UPDATE usuarios
SET foto = 'fotoMba.webp'
WHERE id= 3;
UPDATE usuarios
SET foto = 'fotoNey.webp'
WHERE id= 4;
UPDATE usuarios
SET foto = 'fotoLewa.jpg'
WHERE id= 5;
INSERT INTO posteos VALUES (DEFAULT, 1, 'postMessi.jpg', "Arranco una nueva etapa en mi vida y lo hago con toda la motivación y las ganas de seguir aprendiendo cada día. Trabajaremos por cumplir los objetivos del @psg. #AllezParis", "2020-07-01 21:11:50", null);
INSERT INTO posteos VALUES (DEFAULT, 1, 'postMessi2.webp', "Qué hermosa locura!!! Esto es increíble, gracias Dios!!! SOMOS CAMPEONES LA CONCHA DE SU MADRE!!!!!! Vamossss carajooooo! #VamosArgentina", "2020-08-12 19:12:44", null);
INSERT INTO posteos VALUES (DEFAULT, 2, 'postCris.webp', "Everyone who knows me, knows about my never ending love for Manchester United. The years I spent in this club where absolutely amazing and the path we’ve made together is written in gold letters in the history of this great and amazing institution.", "2021-09-18 21:32:44", null);
INSERT INTO posteos VALUES (DEFAULT, 2, 'postCris2.jpg', "Quem diz que em Manchester não há sol?!?! #blessedfamily", "2021-03-16 12:22:11", null);
INSERT INTO posteos VALUES (DEFAULT, 3, 'postMba.webp', "5 games. 5 wins. ICI C’EST PARIS", "2021-02-22 06:55:41", null);
INSERT INTO posteos VALUES (DEFAULT, 3, "postMba2.jpeg", "End…", "2021-07-12 09:49:04", null);
INSERT INTO posteos VALUES (DEFAULT, 4, "postNey.jpeg", "Buen partido pero no pudimos ganarle al mejor de america :(. Todos sabemos que Argentina es 10 veces mejor que Brasil", "2021-10-24 21:46:16", null);
INSERT INTO posteos VALUES (DEFAULT, 4, "postNey2.jpg", "Haciendo lo que mejor hago (despues de tirarme y llorar en los partidos) ", "2019-11-21 01:52:22", null);
INSERT INTO posteos VALUES (DEFAULT, 5, "postLewa.jpeg", "A new chapter begins tommorow️ @fcbayern #UCL", "2020-08-06 09:18:55", null);
INSERT INTO posteos VALUES (DEFAULT, 5, "postLewa2.webp", "Good to be back @fcbayern", "2021-07-07 03:23:35", null);
INSERT INTO comentarios VALUES (DEFAULT, 2, 1, "Mucha suerteee!", "2020-07-01 22:12:52");
INSERT INTO comentarios VALUES (DEFAULT, 3, 1, "Exito", "2020-07-01 23:12:50");
INSERT INTO comentarios VALUES (DEFAULT, 4, 1, "Crackkkkkk", "2020-07-01 23:11:50");
INSERT INTO comentarios VALUES (DEFAULT, 5, 1, "Suerte en todooo", "2020-07-01 22:11:50");
INSERT INTO comentarios VALUES (DEFAULT, 2, 2, "El bicho te felicita por tu primer titulo internacional", "2020-08-12 20:12:44");
INSERT INTO comentarios VALUES (DEFAULT, 3, 2, "Igual te gane en el mundial", "2020-08-12 21:12:44");
INSERT INTO comentarios VALUES (DEFAULT, 4, 2, "Ganaron por suerte", "2020-08-12 22:12:44");
INSERT INTO comentarios VALUES (DEFAULT, 5, 2, "Como te lo merecias!", "2020-08-12 23:12:44");
INSERT INTO comentarios VALUES (DEFAULT, 1, 3, "Buena suerte en tu nueva etapa bichitooo", "2021-09-18 22:32:44");
INSERT INTO comentarios VALUES (DEFAULT, 3, 3, ":)", "2021-09-18 23:32:44");
INSERT INTO comentarios VALUES (DEFAULT, 4, 3, "Good luck", "2021-09-18 21:39:44");
INSERT INTO comentarios VALUES (DEFAULT, 5, 3, "EL BICHOOO", "2021-09-18 21:40:44");
INSERT INTO comentarios VALUES (DEFAULT, 1, 4, "Godddd", "2021-03-16 13:22:11");
INSERT INTO comentarios VALUES (DEFAULT, 3, 4, "CR7", "2021-03-16 14:22:11");
INSERT INTO comentarios VALUES (DEFAULT, 4, 4, "Beast mode", "2021-03-16 14:26:11");
INSERT INTO comentarios VALUES (DEFAULT, 5, 4, "Leyenda", "2021-03-16 14:23:11");
INSERT INTO comentarios VALUES (DEFAULT, 1, 5, "Ya vas a perder", "2021-02-22 07:30:41");
INSERT INTO comentarios VALUES (DEFAULT, 2, 5, "Niceee", "2021-02-22 08:30:41");
INSERT INTO comentarios VALUES (DEFAULT, 4, 5, "Tortuga", "2021-02-22 09:30:41");
INSERT INTO comentarios VALUES (DEFAULT, 5, 5, "No me pases en goles bro", "2021-02-22 09:34:41");
INSERT INTO comentarios VALUES (DEFAULT, 1, 6, ":0", "2021-07-12 10:49:04");
INSERT INTO comentarios VALUES (DEFAULT, 2, 6, "SIUUUUUU", "2021-07-12 11:49:04");
INSERT INTO comentarios VALUES (DEFAULT, 4, 6, "Vamos a salir campeonessss", "2021-07-12 12:49:04");
INSERT INTO comentarios VALUES (DEFAULT, 5, 6, "Bien ahi", "2021-07-12 13:49:04");
INSERT INTO comentarios VALUES (DEFAULT, 1, 7, "Algo aprendiste estos dias", "2021-10-24 21:50:16");
INSERT INTO comentarios VALUES (DEFAULT, 2, 7, "Arriba Ney", "2021-10-24 22:50:16");
INSERT INTO comentarios VALUES (DEFAULT, 3, 7, "No digas eso bro, le subis el ego a los argentos", "2021-10-24 23:50:16");
INSERT INTO comentarios VALUES (DEFAULT, 5, 7, "Facts", "2021-10-24 23:51:16");
INSERT INTO comentarios VALUES (DEFAULT, 1, 8, "Llorar es lo tuyo", "2019-11-21 02:52:22");
INSERT INTO comentarios VALUES (DEFAULT, 2, 8, "Eso", "2019-11-21 03:52:22");
INSERT INTO comentarios VALUES (DEFAULT, 3, 8, "Arribaaaa!", "2019-11-21 04:52:22");
INSERT INTO comentarios VALUES (DEFAULT, 5, 8, "Facts x2", "2019-11-21 05:52:22");
INSERT INTO comentarios VALUES (DEFAULT, 1, 9, "Me bas a robar el balon de oro?", "2020-08-06 10:18:55");
INSERT INTO comentarios VALUES (DEFAULT, 2, 9, "Capo", "2020-08-06 11:18:55");
INSERT INTO comentarios VALUES (DEFAULT, 3, 9, "Crackkkkk", "2020-08-06 12:18:55");
INSERT INTO comentarios VALUES (DEFAULT, 4, 9, ":)", "2020-08-06 13:18:55");
INSERT INTO comentarios VALUES (DEFAULT, 1, 10, "Venite al PSG", "2021-07-07 04:23:35");
INSERT INTO comentarios VALUES (DEFAULT, 2, 10, "Venite al United", "2021-07-07 05:23:35");
INSERT INTO comentarios VALUES (DEFAULT, 3, 10, "Leo tiene razon lewan", "2021-07-07 06:23:35");
INSERT INTO comentarios VALUES (DEFAULT, 4, 10, "Ponete a hacer tiktoks mejor", "2021-07-07 07:23:35")