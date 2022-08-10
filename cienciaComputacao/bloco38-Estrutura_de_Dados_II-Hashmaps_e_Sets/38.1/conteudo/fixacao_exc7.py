# Exercício 7: Utilize o dicionário criado no exercício 5. Para as chaves ímpares, não queremos mais mapear para o seu dobro, mas sim para o seu triplo. Consulte o método keys() e atualize o seu dicionário para a nova regra.

dict_comprehension = {elemento: elemento * 2 for elemento in range(3, 21)}

for elemento in dict_comprehension.keys():
    if elemento % 2 == 1:
        dict_comprehension[elemento] = elemento * 3

print(dict_comprehension)