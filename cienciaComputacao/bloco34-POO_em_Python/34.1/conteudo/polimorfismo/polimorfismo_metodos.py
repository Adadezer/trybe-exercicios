class Pessoa:
    # None é equivalente ao clássico NULL em outras linguagens
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []

    def add_brinquedos(self, brinquedo):
        self.brinquedos.append(brinquedo)

    def __str__(self):
        return f"""
        -Nome: {self.nome}
        -Idade: {self.idade}
        -Saldo na conta: {self.saldo_na_conta}
        -Brinquedos: {self.brinquedos}
        """

pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Matheus", 33)
pessoa_4 = Pessoa("Matheus", saldo_na_conta=100)

pessoa_1.add_brinquedos("carrinho")

print(pessoa_1, pessoa_2, pessoa_3, pessoa_4)