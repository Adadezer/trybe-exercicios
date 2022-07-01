# 🚀 Exercício 1: Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como "Fizz" ao invés do número;
# Números divisíveis por 5 devem aparecer como "Buzz" ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como "FizzBuzz" ao invés do número.

# # Exemplo: 3 -> [1, 2, "Fizz"].

def fizzbuzz(n):
    numbers = []
    for number in range(1, n + 1):
        if number % 15 == 0:
            numbers.append("FizzBuzz")
        elif number % 3 == 0:
            numbers.append("Fizz")
        elif number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers
    
# def fizzbuzz(num):
#     list_number = []
#     for number in range(1, num + 1):
#         if number % 3 == 0:
#             list_number.append('Fizz')
#         elif number % 5 == 0:
#             list_number.append('Buzz')
#         elif number % 15 == 0:
#             list_number.append('FizzBuzz')
#         else:
#             list_number.append(number)

#     return list_number


