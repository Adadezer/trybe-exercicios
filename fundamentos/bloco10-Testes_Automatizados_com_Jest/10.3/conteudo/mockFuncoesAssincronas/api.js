/* Da mesma maneira que podemos mockar funções síncronas, podemos fazê-lo com as assícronas. A diferença se dá nas implementações.

Nas funções assíncronas, utilizamos o mockResolvedValue(value) ou o mockRejectedValue(value).

Assim como nas demais implementações, podemos definir o retorno para apenas uma chamada com mockResolvedValueOnce(value) ou mockRejectedValueOnce(value) .

Temos, num arquivo api.js , uma requisição para a API Estúdios Ghibli: */

function fetchURL() {
  return fetch('https://ghibliapi.herokuapp.com/species').then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { fetchURL };