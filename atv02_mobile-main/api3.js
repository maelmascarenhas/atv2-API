let url = "https://economia.awesomeapi.com.br/last/";
let coins = "USD-BRL,EUR-BRL,BTC-BRL";

fetch(url + coins)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let dolarReal = data.USDBRL;

    // Verifique o nome correto do campo de data na resposta da API
    let rawDate = dolarReal.create_date;

    // Converta a data para um objeto Date
    let estaData = new Date(rawDate);

    document.getElementById('title').innerHTML = dolarReal.name;
    document.getElementById('thisdate').textContent = estaData.toLocaleString();
    document.getElementById('maxvalue').textContent = parseFloat(dolarReal.high).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    document.getElementById('minvalue').textContent = parseFloat(dolarReal.low).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  });
