const city = document.getElementById("city");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=62a028e609c9bcf3b456c6b79a03a54e&units=imperial`, {
        mode: "cors"
})
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response.main, new Date().toLocaleTimeString());
            let weatherPara = document.querySelector("#weather")
            weatherPara.textContent = `It is ${response.main.temp} degrees in ${city.value}.`
        })
})
save.addEventListener("click", (e) => {
    e.preventDefault();
})
remove.addEventListener("click", (e) =>{
    e.preventDefault();
})

class SelectedAreas {
    constructor() {
        this.cities = [];
    }

    add(city) {
        if (!this.cities.includes(city)) {
            this.cities.push(city)

            this.updateDom();
        }
    }

    updateDom() {
        let ul = document.querySelector("#selectedCities");
        ul.innerHTML = ""
        for (let city of this.cities) {
            let li = document.createElement("li");
            li.textContent = city;
            ul.appendChild(li);
        }
    }