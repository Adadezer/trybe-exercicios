# 🚀 Exercício 1: Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como "Fizz" ao invés do número;
# Números divisíveis por 5 devem aparecer como "Buzz" ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como "FizzBuzz" ao invés do número.

# # Exemplo: 3 -> [1, 2, "Fizz"].

from exercicio1 import fizzbuzz

def test_fizzbuzz_passing_common_number():
    assert fizzbuzz(2) == [1, 2]

def test_fizzbuzz_number_divisible_three():
    assert fizzbuzz(3)[-1] == 'Fizz'

def test_fizzbuzz_number_divisible_five():
    assert fizzbuzz(5)[-1] == 'Buzz'

def test_fizzbuzz_number_divisible_three_five():
    assert fizzbuzz(15)[-1] == 'FizzBuzz'