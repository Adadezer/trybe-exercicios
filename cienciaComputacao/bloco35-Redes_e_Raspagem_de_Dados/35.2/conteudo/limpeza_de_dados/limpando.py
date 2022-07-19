# No caso do valor, poderíamos utilizar uma expressão regular para remover os outros caracteres. O padrão é conter um símbolo de libra, seguido por números, ponto para separar casas decimais e dois números como casas decimais. Essa expressão regular pode ser feita da seguinte forma: £\d+\.\d{2}.

# Agora, para utilizar a expressão regular que fizemos, podemos substituir o método getall pelo método re, ou o método get por re_first. Ambos, além de recuperar valores, aplicarão a expressão regular sobre aquele valor.

from parsel import Selector

import requests

response = requests.get("http://books.toscrape.com/")

selector = Selector(text=response.text)

# Extrai todos os preços da primeira página

prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)


# Já para o caso do sufixo ...more, poderíamos utilizar fatiamento para removê-lo. Mas antes é importante verificarmos se o conteúdo possui o sufixo, evitando assim perda de conteúdo de forma acidental.

response2 = requests.get("http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html")

selector2 = Selector(text=response2.text)

# Extrai a descrição
description = selector2.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

print(description)