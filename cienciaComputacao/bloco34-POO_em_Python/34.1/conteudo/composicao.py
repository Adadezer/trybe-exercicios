# Exercício de fixação 1:
# Uma casa possui eletrodomésticos, tais como: geladeira, batedeira, micro-ondas, fogão e etc.
# Implemente o objeto pessoa realizando a compra de uma geladeira e a ligue. Teste com prints para que possamos visualizar a pessoa e seus eletrônicos.

class Geladeira:
    def __init__(self, marca, cor, preco):
        self.marca = marca
        self.cor = cor
        self.preco = preco
        self.ligado = False

    def ligar(self):
        self.ligado = True

    def desligar(self):
        self.ligado = False

    def esta_ligado(self):
        return self.ligado

    def __str__(self):
        return f"""
        Geladeira
        - Marca: {self.marca}
        - Cor: {self.cor}
        - Preço: {self.preco}
        """

class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.geladeira = None
    
    def compar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira
        else:
            raise ValueError('saldo insuficiente')

    
    def __str__(self):
        return f"""
        -Nome: {self.nome}
        
        Comprou uma geladeira da
        -Marca: {self.geladeira.marca}
        -Cor: {self.geladeira.cor}
        -Por: R${self.geladeira.preco},00
        
        e ligou ela
        -A geladeira está ligada?: {self.geladeira.esta_ligado() and "Sim" or "Não"}

        Saldo: {self.saldo_na_conta} 
        """

cliente = Pessoa("Adadezer", 10000)
cliente.saldo_na_conta
geladeira_brastemp = Geladeira("Brastemp", "prata", 3000)
cliente.compar_geladeira(geladeira_brastemp)
cliente.geladeira.ligar()
# cliente.geladeira.desligar()
cliente.geladeira.esta_ligado()

# print(geladeira_brastemp)
print(cliente)


