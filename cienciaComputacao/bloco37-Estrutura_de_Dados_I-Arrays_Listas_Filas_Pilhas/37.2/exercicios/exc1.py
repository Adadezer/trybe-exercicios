# 🚀 Exercício 1 Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.

# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4

def instabilidade(valores_coletados):
    tempo_sem_instabilidade = 0
    tempo_atual = 0
    for value in valores_coletados:
        if value == 1:
            tempo_atual += 1
        else:
            tempo_atual = 0
        if tempo_atual >= tempo_sem_instabilidade:
            tempo_sem_instabilidade = tempo_atual
    return tempo_sem_instabilidade

print(instabilidade([0, 1, 1, 1, 0, 0, 1, 1]))