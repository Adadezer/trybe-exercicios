# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao final, você deve imprimir a soma dos valores válidos.

# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit, embutido no tipo str, pode ser utilizado para verificar se a string corresponde a um número natural.

import sys

natural_numbers = input("Digite números naturais para a soma, separando-os com espaço: ")

arr_numbers = natural_numbers.split()

result = 0

for number in arr_numbers:
    if not number.isdigit():
        err = "Erro ao somar valores"
        print(f"{err} {number} é um valor inválido", file=sys.stderr)
    else:
        result += int(number)

print(f"A soma dos números é: {result}")