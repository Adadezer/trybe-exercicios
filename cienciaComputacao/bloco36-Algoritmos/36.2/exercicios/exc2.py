# 🚀 Exercício 2: Transforme o algoritmo criado acima em recursivo.
def count_even_resursive(n):
    if n == 1:
        print(n)
        return 0
    elif n % 2 == 0:
        print(n)
        return 1 + count_even_resursive(n - 1)

    else:
        return count_even_resursive(n -1)

print(count_even_resursive(6))