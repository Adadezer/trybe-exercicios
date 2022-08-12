# Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive. A pontuação final é calculada da seguinte forma:
# A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
# O redutor é o menor numero que a outra pessoa não escolheu;
# A pontuação final é a nota de partida - redutor.

# Exemplo:
# clara = [0, 1, 5, 9, 10]
# # nota de partida: 5
# # redutor: 1
# # pt: 4

# marco = [0, 2, 8, 9, 10]
# # nota de partida: 8
# # redutor: 2
# # pt individual: 6

# # Quem ganhou: Marco

# Implemente uma função que receba um dicionário com os nomes e números chutados e retorne o nome de quem ganhou.

# entrada = {
#     'Clara': [0, 1, 5, 9, 10],
#     'Marco': [0, 2, 8, 9, 10]
# }

# # saída: 'Marco'

# Faça a análise de complexidade da sua solução.

def nota_partida(jogador1, jogador2):
    return max(jogador1.difference(jogador2))

def redutor(jogador1, jogador2):
    return min(jogador1.difference(jogador2))

def pontuacao_final(nota_partida, redutor):
    return nota_partida - redutor

def blefe(entrada):
    clara = set(entrada["Clara"])
    # print(clara)

    marco = set(entrada["Marco"])
    # print(marco)

    nota_partida_clara = nota_partida(clara, marco)
    nota_partida_marco = nota_partida(marco, clara) 

    redutor_clara = redutor(clara, marco)
    redutor_marco = redutor(marco, clara)

    pontuacao_final_clara = pontuacao_final(nota_partida_clara, redutor_clara)
    pontuacao_final_marco = pontuacao_final(nota_partida_marco, redutor_marco)

    ganhador = list(entrada.keys())
    
    if pontuacao_final_clara > pontuacao_final_marco:
        print(ganhador[0])
    else:
        print(ganhador[1])

entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

blefe(entrada) 