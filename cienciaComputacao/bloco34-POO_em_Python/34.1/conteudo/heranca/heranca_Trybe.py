# Exercício de Fixação 2
# Implemente a classe dos demais eletrodomésticos (microondas, batedeira, fogão), sempre herdando da classe Eletrodoméstico e teste seu uso com prints no console.

class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.preco = preco
        self.__ligado = False
        self.__amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    def __str__(self):
        return f"""
        Eletrodomestico:
        -Cor: {self.__cor}
        -Potencia: {self.__potencia}
        -Voltagem: {self.__voltagem}
        -Preço: {self.preco}
        """

class Liquidificador(Eletrodomestico): # Exemplo de Herança
    def __init__(self, cor, potencia, voltagem, preco):
	# chamando o método da classe mãe
        super().__init__(cor, potencia, voltagem, preco)
    
    def __str__(self):
        return f"""
        Liquidificador:
        -Preço: {self.preco}
        """
    # por causa do encapsulamento os atributos são privados, só preço é publico e pode ser acessado nas classes filhas

class Geladeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco, quantidade_de_portas=1):
        super().__init__(cor, potencia, voltagem, preco)
	# sobrescrita do método da classe mãe
        self.quantidade_de_portas = quantidade_de_portas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permitindo a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico: Eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomesticos.append(eletrodomestico)

    def __str__(self):
        return f"""
        -Nome: {self.nome}
        
        comprou vários eletrodomésticos, são eles: {self.eletrodomesticos}

        saldo final: {self.saldo_na_conta}
        """

class Microondas(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)

class Batedeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)

class Fogao(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco, quantidade_de_bocas= 6):
        super().__init__(cor, potencia, voltagem, preco)

        self.quantidade_de_bocas = quantidade_de_bocas

cliente = Pessoa("Adadezer", 5000)
eletrodomestico = Eletrodomestico("Preto", 500, 220, 50)
liquidificador = Liquidificador("Preto", 550, 110, 110)
geladeira = Geladeira("Prata", 104, 220, 3000)
microondas = Microondas("Prata", 1000, 110, 480)
batedeira = Batedeira("Preto", 500, 220, 200)
fogao = Fogao("Preto", 2000, 220, 790)
cliente.comprar_eletrodomestico(liquidificador)
cliente.comprar_eletrodomestico(geladeira)
cliente.comprar_eletrodomestico(microondas)
cliente.comprar_eletrodomestico(batedeira)
cliente.comprar_eletrodomestico(fogao)

print(eletrodomestico)
# print(liquidificador)
print(cliente)