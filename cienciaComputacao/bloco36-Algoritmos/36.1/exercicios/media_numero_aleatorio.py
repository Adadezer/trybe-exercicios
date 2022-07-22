# 🚀 Exercício 3 Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um desses números deve ser a média de n números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?

import random


def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        soma = 0
        average = 0
        for _ in range(n): # repete o for n vezes
            #randrange gera numeros aletorios entre x e y (y não incuído)
            soma += random.randrange(1, n) #pego esses numeros, e somo um com o outro
        average = soma / n
        list_of_averages.append(average)
        # o calculo da média é feito 100 vezes, e cada média é guardada na lista
    return list_of_averages

print(randomAverages(10))

# Complexidade de tempo: O(n) - Linear => pois, o algoritmo demora x tempo para executar dependendo do número de médias que precisar calcular

# Complexidade de espaço: O(1) - Constante => pois, independente do numero de médias que precisar calcular, sempre vai ser gerado um array de 100 posições, ocupando esse espaço na memória 