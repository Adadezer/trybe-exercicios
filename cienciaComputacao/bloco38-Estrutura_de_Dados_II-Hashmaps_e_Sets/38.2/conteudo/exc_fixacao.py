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

    # Exercício 6 - difference
    def difference(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    # Exercício 6 - issubset
    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                return False

        return True

    # Exercício 6 - issuperset
    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.set[index] and not self.set[index]:
                return False

        return True

if __name__ == "__main__":
    # EXC 1 e 2
    conj = Conjunto()
    for item in [0, 10, 100, 1000]:
        conj.add(item)
    
    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)

    print('exc1e2: ----',conj)
    print('exc1e2: ----',conj2)

    # EXC 3
    print('exc3: ----',1 in conj)
    print('exc3: ----',0 in conj)

    # EXC 4
    conjU1 = Conjunto()
    for i in range(1, 11):
        conjU1.add(i)

    conjU2 = Conjunto()
    for i in range(10, 21):
        conjU2.add(i)

    conjUnion = conjU1.union(conjU2)
    print('exc4: ----',conjUnion)
    
    # EXC 5
    conjIn1 = Conjunto()
    for i in range(0, 10, 3): # de 0 a 10 pulando 3 em 3, saída: {0, 3, 6, 9}
        conjIn1.add(i)
    
    conjIn2 = Conjunto()
    for i in range(10, 20, 3): # de 10 a 20 pulando 3 em 3, saída: {12, 15, 18}
        conjIn2.add(i)

    conjInter = conjIn1.intersection(conjIn2)
    print('exc5: ----', conjInter)

    # EXC 6
    conj3 = Conjunto()
    for i in [1, 2, 3]:
        conj3.add(i)

    conj4 = Conjunto()
    for i in [7, 2, 10]:
       conj4.add(i)

    conj5 = Conjunto()
    conj6 = conj3.union(conj4)

    print('exc6 - issubset: ----', conj3.issubset(conj6))
    print('exc6 - issuperset: ----', conj6.issuperset(conj3))
    print('exc6 - issubset: ----',conj5.issubset(conj6))
    print('conj5:', conj5)

    # EXC 7
    conj_estudantes = Conjunto()
    conj_lista1 = Conjunto()
    conj_lista2 = Conjunto()

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]
    
    for elem in estudantes:
        conj_estudantes.add(elem)
    
    for elem in lista1_entregues:
        conj_lista1.add(elem)

    for elem in lista2_entregues:
        conj_lista2.add(elem)

    print("Não entregaram a lista 1:", conj_estudantes.difference(conj_lista1))
    print("Já entregaram as 2 listas:", conj_lista1.intersection(conj_lista2))
    print("Quem já entregou pelo menos uma lista:", conj_lista1.union(conj_lista2))
    print("Quem não entregou nenhuma:", conj_estudantes.difference(conj_lista1.union(conj_lista2)))

# Exercício 7

# Sua trajetória no curso foi um sucesso e agora você está trabalhando para a Trybe! Em um determinado módulo, os estudantes precisam entregar dois trabalhos para seguir adiante. Cada vez que um dos trabalhos é entregue, o nome da pessoa fica registrado. Precisamos saber como está o andamento da entrega das listas. Para isso, você tem acesso aos nomes das pessoas da turma, bem como ao log de quem já entregou qual lista. A partir das listas abaixo, utilize a classe já criada e imprima os resultados das perguntas abaixo:

# estudantes = [1, 2, 3, 4, 5, 6, 7]
# lista1_entregues = [1, 4, 7, 3]
# lista2_entregues = [3, 1, 6]

# Quem ainda não entregou a lista1?
# Quem já entregou as duas listas?
# Quem já entregou qualquer uma das duas listas?
# Quem ainda não entregou nenhuma das listas?