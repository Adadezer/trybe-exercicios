# Um arquivo é também um iterável, ou seja, pode ser percorrido em um laço de repetição. A cada iteração, uma nova linha é retornada. Vamos fazer igual ao exemplo anterior, porém dessa vez vamos escrever mais de uma linha!

# escrita
file = open("file_manipulation_laco.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("file_manipulation_laco.txt", mode="r")
for line in file:
    print(line)  # não esqueça que a quebra de linha também é um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo