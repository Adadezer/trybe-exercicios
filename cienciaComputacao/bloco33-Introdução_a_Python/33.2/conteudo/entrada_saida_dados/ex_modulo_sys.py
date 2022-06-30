# Outra maneira de recebermos valores externos na execução de nossos programas é utilizando o módulo sys. Quando executamos um script e adicionamos parâmetros, os mesmos estarão disponíveis através de uma variável chamada sys.argv, que é preenchida sem que precisemos fazer nada. Na prática, podemos escrever o conteúdo abaixo em um arquivo e passar alguns parâmetros ao executá-lo.

import sys


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)