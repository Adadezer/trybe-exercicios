# 🚀 Exercício 3 Faça uma função que valide um e-mail, lançando uma exceção quando o valor for inválido. Endereços de e-mail válidos devem seguir as seguintes regras:

# Devem seguir o formato nomeusuario@nomewebsite.extensao;
# O nome de usuário deve conter somente letras, dígitos, traços e underscores (_);
# O nome de usuário deve iniciar com uma letra;
# O nome do website deve conter somente letras e dígitos;
# O tamanho máximo da extensão é de 3 caracteres.

# 🦜 As funções isalpha e isdigit podem ser utilizadas para verificar se uma letra ou palavra são compostas de somente caracteres ou dígitos. Exemplo: "1".isaplha() -> False , "a".isalpha() -> True.

import pytest
from exercicio3 import valid_email

def test_user_contains_specific_characters():
    'O nome de usuário deve conter somente letras, dígitos, traços e underscores (_)'
    assert valid_email('adadezer@gmail.com')[0] is True

def test_user_starts_letter():
    'O nome de usuário deve iniciar com uma letra'
    assert valid_email('adadezer@gmail.com')[1] is True

def test_website_contains_letters_digit():
    'O nome do website deve conter somente letras e dígitos'
    assert valid_email('adadezer@gmail.com')[2] is True

def test_extension_maximum_three_character():
    'O tamanho máximo da extensão é de 3 caracteres'
    assert valid_email('adadezer@gmail.com')[3] is True

def test_format_email():
    'Devem seguir o formato nomeusuario@nomewebsite.extensao'
    assert valid_email('adadezer@gmail.com') == [True, True, True, True]

def test_invalid_email_raises_an_exception():
    'Devem seguir o formato nomeusuario@nomewebsite.extensao'
    with pytest.raises(IndexError, match="list index out of range"):
        valid_email('adadezergmail.com')