function loadpk(){
    let url = "https://pokeapi.co/api/v2/pokemon/pikachu";

    fetch(url).then((response) => {
        return response.json();
    })
    .then((data) => {
        console.clear();
        console.log(data);
        document.getElementById("nome").innerHTML = data["name"];
        document.getElementById("numero").innerHTML = data["id"];
        let img = data['sprites']['front_default'];
        document.getElementById("pic").setAttribute('src', img);
    })
    .catch((erro) => {
        console.log("Deu Erro " + erro);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn1").onclick = loadpk;
});