# # Rate Limit

# # Muitas vezes a página de onde estamos removendo o conteúdo possui uma limitação de quantas requisições podemos enviar em um curto período de tempo, evitando assim ataques de negação de serviço.
# # Isto pode levar a um bloqueio por um curto período de tempo ou até mesmo banimento de acessar um recurso.
# # Que tal vermos um exemplo? 😎

# import requests


# # À partir da décima requisição somos bloqueados de acessar o recurso
# # Código de status 429: Too Many Requests
# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
#     print(response.status_code)

# # Neste exemplo, após a décima requisição, o servidor começa a nos retornar respostas com o código de status 429, "Too Many Requests". Isto significa que estamos utilizando uma taxa de solicitação maior que a suportada. Ele permanecerá assim por algum tempo (1 minuto).

# # Uma boa prática é sempre fazermos uma pausa entre as requisições, ou lote delas, mesmo que o website onde a informação está não faça o bloqueio. Assim, evitamos tirar o site do ar.

import requests
import time


# Coloca uma pausa de 6 segundos a cada requisição
# Obs: este site de exemplo tem um rate limit de 10 requisições por minuto
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response)
    time.sleep(6)