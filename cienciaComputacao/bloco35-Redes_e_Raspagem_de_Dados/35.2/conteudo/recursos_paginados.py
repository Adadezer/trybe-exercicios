# # ...
# # for product in selector.css(".product_pod"):
# #     title = product.css("h3 a::attr(title)").get()
# #     price = product.css(".price_color::text").get()
# #     print(title, price)

# # Existe uma classe next, que podemos recuperar a url através do seu elemento âncora
# next_page_url = selector.css(".next a::attr(href)").get()
# print(next_page_url)

# # 'print do terminal, estando na pagina 1' = catalogue/page-2.html


from parsel import Selector
import requests


# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"

next_page_url = 'page-1.html'

while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)

    selector = Selector(text=response.text)

    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        print(title, price)

    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()