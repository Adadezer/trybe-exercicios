# 🚀 Exercício 3 Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);
# O nome de usuário deve iniciar com uma letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é de 3 caracteres.

# 🦜 As funções isalpha e isdigit podem ser utilizadas para verificar se uma letra ou palavra são compostas de somente caracteres ou dígitos. Exemplo: "1".isaplha() -> False , "a".isalpha() -> True.

def valid_email(email):
    arr_validation = []

    user = (email.split("@"))[0]

    # O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);
    allowed_chars = set(("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"))
    char_user = set(user)
    if char_user.issubset(allowed_chars):
        arr_validation.append(True)
    else:
        arr_validation.append(False)

    # O nome de usuário deve iniciar com uma letra;
    first_letter_user = user[0]
    arr_validation.append(first_letter_user.isalpha())

    domain = (email.split("@"))[1]

    website = domain.split(".")[0]
    
    # O nome do website deve conter somente letras e dígitos;
    for letter in website:
        website_valid = True
        if not letter.isalpha() and not letter.isdigit():
            website_valid = False
            break
        
    arr_validation.append(website_valid)

    # O tamanho máximo da extensão é de 3 caracteres.
    extensao = domain.split(".")[1]
    if len(extensao) <= 3:
        arr_validation.append(True)

    # Devem seguir o formato nomeusuario@nomewebsite.extensao;
    #caso algum item do array seja False, o email nao seguiu o formato correto

    print(arr_validation)
    return arr_validation


valid_email('adadezer@gmail.com')