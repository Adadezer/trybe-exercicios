# Vamos ver agora como podemos nos prevenir de possíveis erros que ocorrem quando manipulamos arquivos. 

# Sempre devemos fechar um arquivo e podemos, em um bloco try, fazer isso utilizando a instrução finally ou else. O finally é uma outra cláusula do conjunto try, cuja finalidade é permitir a implementação de ações de limpeza, que sempre devem ser executadas independentemente da ocorrência de ações. Já o else ocorre sempre que todo o try for bem sucedido.

try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")

# Como estamos abrindo o arquivo em modo de leitura, uma exceção será levantada caso ele não exista, executando as cláusulas except e finally. Entretanto, se alterarmos o modo para escrita, o arquivo será criado mesmo se inexistente, executando as cláusulas else e finally.