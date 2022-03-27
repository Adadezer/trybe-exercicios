CREATE DATABASE IF NOT EXISTS exc26_3;

USE exc26_3;

CREATE TABLE IF NOT EXISTS  Users
(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(30),
    PRIMARY KEY(id)
);

INSERT INTO Users (nome, email, senha)
VALUES ('Penelope', 'pene@email.com','123456'),
    ('Nickolas', 'nick@email.com', '1234567'),
    ('Jennifer', 'jenny@email.com', '12345678'),
    ('Johnny', 'john@email.com', '123456789');