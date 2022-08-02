"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""


import sys

class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)
    
    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)


# vamos inicializar e preencher uma estrutura de dados array
array = Array()

# sys.getsizeof retorna o tamanho da lista em bytes
# quando começamos as inserções o valor muda
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size) # 56

array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# como um espaço adicional é reservado o valor não é modificado
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size) #88

# Inserimos mais alguns valores e vamos ver o que acontece.
array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size) # 120

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

# Quando inserimos um novo elemento no início do array, todos os elementos já existentes são deslocados à direita, tendo seu índice modificado em 1. Análogo a isto, quando adicionamos em uma posição intermediária, todos os elementos com índices posteriores ao inserido serão movidos em uma posição.

# inserindo no começo do array
array.set(0, "Valeria")
print(array)  # saída: ["Valeria", "Marcos", "Patrícia"]

# inserindo em uma posição intermediária
array.set(1, "Patrícia")
print(array)

# Algo similar ocorre quando fazemos remoções de valores à partir dos índices:
# Se removermos o último elemento, nada precisa ser modificado (é tirado o ultimo indice somente, os demais permanecem cada um em seu lugar)
# Porém se removermos o primeiro, ou qualquer outro índice, todos os valores serão deslocados à esquerda
# À medida que itens são removidos, a estrutura diminui em tamanho
array.remove(0)  # retorna a string "Valeria"
print(array)  # saída: ['Patrícia'...]

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1