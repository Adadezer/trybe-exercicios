# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".


def higher_name(listNames):
    result = listNames[0]
    for name in listNames:
        if len(name) > len(result):
            result = name
    return result

if __name__ == "__main__":
    print("o maior nome é:", higher_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))