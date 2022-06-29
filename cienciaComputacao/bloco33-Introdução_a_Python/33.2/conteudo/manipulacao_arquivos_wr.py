# A leitura do conteúdo de um arquivo pode ser feita utilizando a função read. Para experimentar, vamos escrever em um arquivo e lê-lo logo em seguida!

# escrita
file = open("file_manipulation_wr.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("file_manipulation_wr.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo