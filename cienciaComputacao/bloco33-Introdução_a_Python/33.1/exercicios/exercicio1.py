# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def higher_number(num1, num2):
    if num1 > num2:
        return num1
    else:
        return num2


if __name__ == "__main__":
    print("O maior número é:", higher_number(250, 32))