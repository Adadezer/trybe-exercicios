# # Em código, vamos baixar o conteúdo da página e criar um seletor, que será utilizado para realizarmos as extrações. Vamos criar o arquivo .py para buscarmos as informações:

from parsel import Selector

import requests

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)

print(selector)

# # Ok, que tal extrairmos todos os livros desta primeira página e buscar seus títulos e preços?

# # Para conseguirmos extrair essas informações precisamos, primeiro, inspecionar cada um dos elementos, buscando algo que os identifique de forma única na página.

# # O título está no atributo title em um elemento âncora (<a>)
# # Dentro de um h3 em elementos que possuem classe product_pod

titles = selector.css(".product_pod h3 a::attr(title)").getall()
# print(titles)

# # Estamos utilizando a::attr(title) para capturar somente o valor contido no texto do seletor

# # Os preços estão no texto de uma classe price_color
# # Que se encontra dentro da classe .product_price

prices = selector.css(".product_price .price_color::text").getall()
# print(prices)

# # Combinando tudo podemos buscar os produtos, em em seguida buscar os valores individualmente

for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)