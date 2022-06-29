# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def media(listNotes):
    result = 0
    for note in listNotes:
        result += note / len(listNotes)
    return result


if __name__ == "__main__":
    print("a média é:", media([5, 10, 6, 2]))