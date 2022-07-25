# Entendendo recursividade e colocando em prática

# Antes de vermos como acontece a "mágica" da recursividade, vamos ver como costuma ser uma estrutura básica de uma função recursiva:

#  --------------------------------
# | Nome da função e parâmetro:    |
# |    Condição de parada          |
# |                                |
# |    Chamada de si mesma         |
#  --------------------------------

# 1. Declaramos uma função com um parâmetro.
# 2. Dentro da função criada, definimos qual é a condição de parada da função.
# 3. A condição de parada faz uma comparação entre o valor da condição com o parâmetro que a função está recebendo. Caso a condição não se satisfaça, a função é chamada novamente com um novo parâmetro. Caso contrário a execução para na condição de parada.

def factorial(n):
    if n == 1: # caso base
        return 1
    else:
        return n * factorial(n - 1) # caso recursivo

print(factorial(5))