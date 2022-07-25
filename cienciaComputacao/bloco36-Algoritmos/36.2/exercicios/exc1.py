# 🚀 Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

def count_even(n):
    pares = 0
    for number in list(range(1, n +1)):
        if number % 2 == 0:
            pares += 1
    return pares  

print(count_even(5))