const api_key = `63718458320aec7594636e977d2f6544`;

const setTemperature = () =>{
    const city =document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key }&units=metric`;
    console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data => displayTemperature(data))
}
const setTemperatureText = (id,text)=>{
     document.getElementById(id).innerText=text;
}
const displayTemperature = temperature =>{
    setTemperatureText('city',temperature.name);
    setTemperatureText('temperature',temperature.main.temp);
    setTemperatureText('temperature-condition',temperature.weather[0].main);
    // console.log(temperature );
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src',url)
}
