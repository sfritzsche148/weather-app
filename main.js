async function Weather() {

    let ort = document.getElementById('ort');
    let temp = document.getElementById('temp');
    let wetter = document.getElementById('wetter');
    let highTemp = document.getElementById('highTemp');
    let minTemp = document.getElementById('minTemp');
    

    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.8571272&lon=12.1181047&appid=39d5459be0938050dcdef1970f774cfb');
    let result = await response.json();
    console.log(result);
    
    ort.innerHTML = 'Das Wetter für ' + result.name;
    temp.innerHTML = KtoC(result.main.temp);
    highTemp.innerHTML = KtoC(result.main.temp_max);
    minTemp.innerHTML = KtoC(result.main.temp_min);
    wetter.innerHTML = 'Windgeschwindigkeit: '+ result.wind.speed;
}
Weather();


function KtoC(Kelvin) {
    let kTemp = Kelvin;
    let ToC = Math.floor(kTemp - 273.15);
    let answer = ToC + '\xB0C';
    return answer;
}