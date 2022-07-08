from abc import ABC, abstractmethod


class Navigator:
    def __init__(self, navigation_strategy):
        self.__navigation_strategy = navigation_strategy

    def build_route(self, departure, arrival):
        self.__navigation_strategy.build_route(departure, arrival) # partida e chegada


class NavigationStrategy(ABC): #irei usar em todos os casos
    @classmethod
    @abstractmethod
    def build_route(self):
        raise NotImplementedError


class WalkStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota a pé saindo de {departure} para {arrival}")


class BikeStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de biscicleta saindo de {departure} para {arrival}")


class BusStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de ônibus saindo de {departure} para {arrival}")


class CarStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de carro saindo de {departure} para {arrival}")


Navigator(WalkStrategy).build_route('Centro', 'Pampulha')
Navigator(BikeStrategy).build_route('Centro', 'Pampulha')
Navigator(BusStrategy).build_route('Centro', 'Pampulha')
Navigator(CarStrategy).build_route('Centro', 'Pampulha')



##################################################################################################
##################################################################################################

o For é uma laço de reptição que itera varios valores caso precise...
iterar significa passar por valores uma por vez numa cert sequencia...


entende o que da pra iterar

exemplo:
lista = [0,1,2,3,4,5]
print(hasattr(lista, '__iter__'))

exemplo:
lista = '1234'
print(hasattr(lista, '__iter__'))

exemplo:
lista = 1234
print(hasattr(lista, '__iter__'))









# definir uma lista
my_list = ['Cristiano', 'Fernanda', 'Tulio', 'Roberta']

# obter um iterador usando iter()
my_iter = iter(my_list)

# iterar através dele usando next()

# Output: 4
print(next(my_iter))

# Output: 7
print(next(my_iter))

# next(obj) is same as obj.__next__()

# Output: 0
print(my_iter.__next__())

# Output: 3
print(my_iter.__next__())

# Isso gerará um erro, não há itens restantes
next(my_iter)



##################################################################################################
##################################################################################################

from collections.abc import Iterable, Iterator


class ProfileIterator(Iterator):  # nosso Interador de Perfis
    def __init__(self, friends):
        self.__friends = friends
        self.__index = 0  # começa na posição inicial para buscar amigos ou pode por -1

    def __next__(self):  # Respeita a Interface
        try:
            current_value = self.__friends[self.__index]  # sai para buscar a posição atual
            # print("Chamou o Next por baixo dos panos ")
        except IndexError:       # caso ocorre o index erros vc ja para a interação se for o caso
            # Exceção lançada quando não há mais elementos a serem iterados
            raise StopIteration()
        else:
            self.__index += 1 # se iniciar negativo aqui fica o sinal de -
            return current_value


class SocialNetwork(Iterable):  # Quem vai solicitar a Interação
    def __init__(self, friends):
        self.friends = friends

    def __iter__(self):
        return ProfileIterator(self.friends)  # Solicita dados do Iterador


if __name__ == "__main__":
    redesocial = SocialNetwork(["Cristiano", "Fernanda", "Tulio", "Roberta"])

    for user in redesocial:
        print(user)