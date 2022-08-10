class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    # Exercicio 2:
    def update_value(self, id_num, new_name):
        if self.has(id_num):
            address = self.get_address(id_num)
            self._buckets[address].name = new_name


# EXERCICIO FIXAÇÃO

# Nossa classe está pronta para ser utilizada no problema proposto com inserção e consulta em O(1). Porém, ela não tem um método para alterar valores. Você vai fazer isso nos exercícios a seguir.

# Exercício 1: b) Use a entrada abaixo para criar objetos Employee:
employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

# Exercício 1: c) Instancie a sua classe HashMap e use os objetos Employee para povoá-la. Imprima na tela o nome da pessoa de id_num = 23, acessando a informação a partir da HashMap.
MapHash = HashMap()

for id_num, name in employees:
    employee = Employee(id_num, name)
    MapHash.insert(employee)

print(MapHash.get_value(23))

# Exercício 2: A pessoa de id_num = 10 está com o nome errado, deveria ser name30. Implemente um método com a assinatura abaixo, onde id_num é a chave para localizar o registro que queremos alterar e new_name é o nome a ser colocado. Verifique se o seu código está realmente alterando o nome, imprimindo o nome antes e depois da alteração:
print(MapHash.get_value(10))
MapHash.update_value(10, 'name30')
print(MapHash.get_value(10))