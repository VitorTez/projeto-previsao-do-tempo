


const key ="7f3757fa610610f6f7218daea12dfdb3"

function colocardadosnatela(dates) {
    console.log(dates)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dates.name
    document.querySelector (".temp").innerHTML = Math.floor (dates.main.temp) + "°C"
    document.querySelector (".texto-previsao").innerHTML = dates.weather[0].description
    document.querySelector (".umidade").innerHTML = dates.main.humidity + "%"
    document.querySelector (".img-previsao").src = `https://openweathermap.org/img/wn/${dates.weather[0].icon}.png`
}

async function buscarcidade(city){

    const dates = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json ())

    colocardadosnatela(dates)

}

function cliqueinobotao() {
    const city = document.querySelector(".input-city").value

    buscarcidade(city)
}
