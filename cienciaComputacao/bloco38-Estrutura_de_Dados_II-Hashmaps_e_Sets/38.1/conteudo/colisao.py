class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if id_num == item.id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if id_num == item.id_num:
                return item is not None
        return None

    def update_value(self, id_num, new_name):
        if self.has(id_num):
            address = self.get_address(id_num)
            for item in self._buckets[address]:
                if id_num == item.id_num:
                    item.name = new_name
            return None
            
employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

MapHash = HashMap()

for id_num, name in employees:
    employee = Employee(id_num, name)
    MapHash.insert(employee)

print(MapHash.get_value(23))

print(MapHash.get_value(10))
MapHash.update_value(10, 'name30')
print(MapHash.get_value(10))

# Exercício 3
# Tente descobrir qual técnica de tratamento de colisão é utilizada pelo Dict, de Python e o HashMap, do Java. Em inglês, o termo de busca é "collision resolution".

# Solução
# A classe Dict utiliza o Open Addressing e Java utiliza Separate Chaining. Vamos entender isso com mais detalhes.

# A classe Dict, de Python, utiliza a técnica de tratamento de colisão chamada Open Addressing e busca o próximo espaço vazio em duas fases. Ambas as fases utilizam a representação binária da chave e aplicam fórmulas matemáticas para definir o próximo índice a ser visitado.

# A classe HashMap, de Java, utiliza a técnica de Separate Chaining, mas quando a lista do bucket começa a ficar grande, Java substitui essa lista por uma Árvore Binária de Busca, uma estrutura de dados que diferente, que não veremos no curso, mas já posso adiantar que é mais eficiente do que uma lista para operações de busca.