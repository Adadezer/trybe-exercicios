# A função open é a responsável por abrir um arquivo, tornando possível sua manipulação. Seu único parâmetro obrigatório é o nome do arquivo. Por padrão, arquivos são abertos somente para leitura, mas podemos modificar isto passando o modo com que vamos abrir o arquivo. No exemplo abaixo, estamos utilizando mode="w", ou seja, estamos abrindo o arquivo para escrita:

# Para escrevermos um conteúdo em um arquivo utilizamos a função write:

file = open("file_manipulation_w.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

# 💡 Só é possível escrever em um arquivo após abri-lo em um modo que permita escrita.

# Assim como podemos redirecionar a saída do nosso programa para a saída de erros, podemos redirecionar o conteúdo digitado dentro de print para um arquivo. Ou seja, também podemos escrever em um arquivo através do print.

# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)

# Para escrever múltiplas linhas podemos utilizar a função writelines. Repare que a função espera que cada linha tenha seu próprio caractere de separação (\n):
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

# Abrimos o arquivo e escrevemos seu conteúdo. Vamos então fechá-lo:
file.close()

# Mas por que devemos sempre fechar um arquivo? A resposta vem do sistema operacional: temos uma quantidade limite de arquivos que podemos abrir de uma só vez e um erro é retornado quando atingimos esse limite. 