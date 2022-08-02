# Exercício de Fixação

# 3 Que tal adicionarmos um método update que atualiza o valor a partir de um índice?
# 🐦 A assinatura deve ser def update(self, index, value):

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
    
    def update(self, index, value):
        self.data[index] = value


# vamos inicializar e preencher uma estrutura de dados array
array = Array()

array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")
array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

array.update(2, "Adadezer")
print()

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1