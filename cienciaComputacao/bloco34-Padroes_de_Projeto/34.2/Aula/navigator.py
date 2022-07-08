from abc import ABC, abstractmethod


class Navigator:
    def __init__(self, navigation_strategy):
        self.__navigation_strategy = navigation_strategy

    def build_route(self, departure, arrival):
        self.__navigation_strategy.build_route(departure, arrival)  # Constrói a Rota de partida e chegada


class NavigationStrategy(ABC):  # Interface
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

class CarStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de carro saindo de {departure} para {arrival}")

class BusaoStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de ônibus saindo de {departure} para {arrival}")

Navigator(WalkStrategy).build_route('São Paulo', 'BH')
Navigator(BikeStrategy).build_route('São Paulo', 'BH')
Navigator(CarStrategy).build_route('São Paulo', 'BH')
Navigator(BusaoStrategy).build_route('São Paulo', 'BH')