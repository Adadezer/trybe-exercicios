/* Exerício 3: Monte uma query que:
	- Crie um banco de dados chamado normalization ;
	- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
	- Popule todas as tabelas com os dados fornecidos nos exercícios.
*/


CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE funcionario (
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(35) NOT NULL,
    sobrenome VARCHAR(35) NOT NULL,
    email VARCHAR(50),
    telefone VARCHAR(20) NOT NULL,
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE = InnoDB;

CREATE TABLE setor (
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE funcionario_setor (
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) ENGINE = InnoDB;

INSERT INTO normalization.funcionario (funcionario_id, nome, sobrenome, email, telefone, dataCadastro)
VALUES
	(12, 'Joseph', 'Rodrigues',	'jo@gmail.com', '(35)998582-1445', '2020-05-05 08:50:25'),
    (13, 'Andre', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
    (14, 'Cintia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');
    
INSERT INTO normalization.setor (setor_id, setor) VALUES
(1, 'Administração'),
(2, 'Vendas'),
(3,	'Operacional'),
(4,	'Estratégico'),
(5, 'Marketing');

INSERT INTO normalization.funcionario_setor (funcionario_id, setor_id) VALUES
(12, 1),
(12, 2),
(13, 3),
(14, 4),
(14, 2),
(15, 5);

SELECT * FROM normalization.funcionario_setor;