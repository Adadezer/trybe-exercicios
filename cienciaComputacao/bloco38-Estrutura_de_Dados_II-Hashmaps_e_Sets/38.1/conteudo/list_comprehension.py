# CONTEUDO DO SITE: https://pythonacademy.com.br/blog/dict-comprehensions-no-python

#  INTRODUÇÃO A DICTS

# A sintaxe para criar dicionários é a seguinte:

# Dicionário vazio
dicionario = {}

# Dicionário comum
dicionario = {'jedi': 10, 'sith': 7}

# Dicionário com chaves inteiras
dicionario = {1: 'Baby Yoda', 2: 'Yoda'}

# Dicionário misturado
dicionario = {'especie': 'Humano', 1: ['Obi Wan Kenobi', 'Qui-Gon Jinn']}

# Outra forma de criação, usando dict()
dicionario = dict({'jedi': 10, 'sith': 7})

print('--------------------------------------------------------------------------------------')

# Já para acessar elementos:

dicionario = {'nome': 'Vinícius Ramos', 'idade': 29}

# Saída: Vinícius Ramos
print(dicionario['nome'])

# Saída: 29
print(dicionario.get('idade'))

# Caso não encontre, devolva o valor None
print(dicionario.get('altura', None))

# Será lançada uma exceção KeyError (descomente para ver o erro)
# print(dicionario['endereco']) 

print('--------------------------------------------------------------------------------------')

# Para atualizar valores:

dicionario = {'nome': 'Vinícius Ramos', 'idade': 29, 'empresa': 'PythonAcademy'}

# Atualiza dados
dicionario['idade'] = 30
dicionario['empresa'] = 'PythonAcademy Inc.'

print(dicionario['idade'])
print(dicionario.get('empresa'))

print('--------------------------------------------------------------------------------------')

# Para remover elementos:
dicionario = {'nome': 'Vinícius Ramos', 'idade': 29, 'empresa': 'PythonAcademy'}

# Remove a chave/valor 'idade': 29
dicionario.pop('idade')

# Remove um par aleatório
dicionario.popitem()

# Remove todos os itens
dicionario.clear()

# Deleta 'empresa' 
# del dicionario['empresa']

print(dicionario)

print('--------------------------------------------------------------------------------------')
# Dict Comprehensions é uma ferramenta muito útil e poderosa do Python para manipulação de dicionários (dicts)! Com essa técnica, podemos tratar dicionários de uma maneira rápida e concisa!

# Sua sintaxe básica é:
# {chave: valor for elemento in iteravel}

# Agora respira que vamos entender cada ponto:

# chave: será a chave de cada elemento do dicionário resultante.
# valor: valor daquela chave.
# elemento: é a unidade de iteração do iterável iterável (se for uma lista, por exemplo, elemento irá receber o valor iteração à iteração)
# iteravel: conjunto de dados que estão sendo iterados (pode ser uma lista ou um set, por exemplo)

# Pra esclarecer, vamos à um exemplo:
dicionario = {elemento: elemento*2 for elemento in range(6)}

# Aqui, cada elemento da lista resultante de range(6) (0, 1, 2, 3, 4, 5) será convertido em:

# Uma chave com o mesmo valor do elemento da lista.
# elemento*2 é o valor de cada chave (multiplicar por 2 cada elemento).
# O resultado será:
print(dicionario)
# {0: 0, 1: 2, 2: 4, 3: 6, 4: 8, 5: 10}

# para mais exemplos e modos de se usar: https://pythonacademy.com.br/blog/dict-comprehensions-no-python