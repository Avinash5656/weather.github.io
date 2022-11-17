

let weather = {
  "apiKey": "c10de9341dc16e02d858b8e843988c5e",
  fetchweather: function (city){
    fetch( 
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=metric&APPID=" 
      + this.apiKey
     )
     .then((Response)=> Response.json())
     .then((data)=>this.displayweather(data));
  },
  displayweather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(" .description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%"
    document.querySelector(".wind-speed").innerText = "Wind Speed:" + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" +name+ "')"
    },
  search: function (){
    this.fetchweather(document.querySelector(".search-bar").value);
  }
};
document.querySelector(".search button").addEventListener("click",function(){
 weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
  if (event.key == "Enter") {
    weather.search();
  }
});