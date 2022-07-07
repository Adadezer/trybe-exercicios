class Animal():
    def __init__(self, nome, cor):
        self.__nome = nome
        self.__cor = cor

    def comer(self):
        print(f"O {self.__nome} está comendo")

    def __str__(self):
      return f"""
      Animal
      -Nome: {self.__nome}
      -Cor: {self.__cor}
      """


class Gato(Animal):
    def __init__(self, nome, cor):
        super().__init__(nome, cor)


class Cachorro(Animal):
    def __init__(self, nome, cor):
        super().__init__(nome, cor)



class Coelho(Animal):
    def __init__(self, nome, cor):
        super().__init__(nome, cor)


gato = Gato("Bichano", "Branco")
cachorro = Cachorro("Totó", "Preto")
coelho = Coelho("Pernalonga", "Cinza")

gato.comer()
cachorro.comer()
coelho.comer()
print(gato)