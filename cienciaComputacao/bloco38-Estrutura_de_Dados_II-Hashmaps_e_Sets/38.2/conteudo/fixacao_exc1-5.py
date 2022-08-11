# Exercício 1 - Inicializando a classe e adicionando elementos
class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    # Exercício 2 - Imprimir
    def __str__(self):
        string = '{'

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    # Exercício 3 - is_in
    def __contains__(self, item):
        return self.set[item]

    # Exercício 4 - União
    def union(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    # Exercício 5 - Intersecção
    def intersection(self, conjuntoB):
        new_conjunto = Conjunto()

        for item in range(1001):
            if self.set[item] and conjuntoB.set[item]:
                new_conjunto.add(item)
        
        return new_conjunto

if __name__ == "__main__":
    conj = Conjunto()
    for item in [0, 10, 100, 1000]:
        conj.add(item)
    
    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)

    print('exc1e2: ----',conj)
    print('exc1e2: ----',conj2)

    print('exc3: ----',1 in conj)
    print('exc3: ----',0 in conj)

    conjU1 = Conjunto()
    for i in range(1, 11):
        conjU1.add(i)

    conjU2 = Conjunto()
    for i in range(10, 21):
        conjU2.add(i)

    conjUnion = conjU1.union(conjU2)
    print('exc4: ----',conjUnion)
    
    conjIn1 = Conjunto()
    for i in range(0, 10, 3): # de 0 a 10 pulando 3 em 3, saída: {0, 3, 6, 9}
        conjIn1.add(i)
    
    conjIn2 = Conjunto()
    for i in range(10, 20, 3): # de 10 a 20 pulando 3 em 3, saída: {12, 15, 18}
        conjIn2.add(i)

    conjInter = conjIn1.intersection(conjIn2)
    print('exc5: ----', conjInter)