-- Para Fixar

-- 1- Monte uma query que gere um valor entre 15 e 20.
SELECT round(15 + RAND() * 5);
SELECT FLOOR(15 + (RAND() * 5)); -- Gabarito

-- 2- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT round(15.75159, 5);

/*
	3- Estamos com uma média de 39.494 de vendas de camisas por mês.
	Qual é o valor aproximado para baixo dessa média?
*/
SELECT floor(39.494);

/*
	4- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes.
	Qual é o valor aproximado para cima dessa média?
*/
SELECT ceil(85.234);