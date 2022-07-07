# Exercícios de fixação

# 1. Em seu terminal Python, crie uma lista (do conhecido tipo list) com alguns elementos. Agora, chame a função nativa iter(), passando essa lista como parâmetro, e veja que é retornado um objeto iterador do tipo list_iterator.

my_list = ["adadezer", "gustavo", "marcus", "heitor"]

print("objeto iterador do tipo list_iterator: ", iter(my_list))

# 2. Guarde este objeto iterador em uma variável e veja o que acontece quando chamar a função nativa next() passando esse objeto como parâmetro.

obj_iterator = iter(my_list)

print(next(obj_iterator))
print(next(obj_iterator))
print(next(obj_iterator))
print(next(obj_iterator))
print(next(obj_iterator)) # esse ultimo retorno mostra o erro StopIteration pq a lista acaba