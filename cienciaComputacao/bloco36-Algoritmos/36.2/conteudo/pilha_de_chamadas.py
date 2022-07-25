# Exercício de fixação:

# Exercício: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele.

# Exemplo:
# Número passado por parâmetro à função: 4

# Execução: 4 + 3 + 2 + 1

# Resultado: 10

def recur_soma(n):
    if n == 1: # caso base
        return 1
    else:
        return n + recur_soma(n - 1) # caso recursivo

print(recur_soma(4))