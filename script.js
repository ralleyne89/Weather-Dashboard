const queryKey = `http://api.openweathermap.org/data/2.5/weather?q=California,us&units=imperial&APPID=7505e48c424a1cbfe348c47894273c19`
const newQuery = `http://api.openweathermap.org/data/2.5/forecast?q=California,us&units=imperial&APPID=7505e48c424a1cbfe348c47894273c19`
let body = $('body');

$('#searchbtn').on('click', function(){
  let userCity = $('#searchbar').val();
  let apiLink = `http://api.openweathermap.org/data/2.5/weather?q=${userCity},us&units=imperial&APPID=7505e48c424a1cbfe348c47894273c19`
  let newApi = `http://api.openweathermap.org/data/2.5/forecast?q=${userCity},us&units=imperial&APPID=7505e48c424a1cbfe348c47894273c19`
  console.log(userCity)
  console.log(apiLink)
  $.ajax({
    url: apiLink,
    dataType: "json"
}).then(function(city) {
    let array = city.weather
    let rawJson = JSON.stringify(city);
    let json = JSON.parse(rawJson);
    console.log(json);

    for(i = 0; i < array.length; i++) {

   let card = $('<div>').html(`<div class="card mb-3" style="max-width: 540px; display: block; margin: 20px auto;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
         
          <h5 class="card-title">Current Weather<hr>${city.name}</h5>
          <small>${city.weather[0].description}</small>
          <p class="card-text">Current Temperature: ${city.main.temp}<br> Humidity: ${city.main.humidity} <br>Wind Speed: ${city.wind.speed} MPH</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>`);

  
  body.append(card);
    }
});

// AJAX call for current weather 
$.ajax({
    url: newApi,
    dataType: "json"
}).then(function(city){
    let list = city.list;
    let dayOne = city.list[0];
    let dayTwo = city.list[7];
    let dayThree = city.list[15];
    let dayFour = city.list[23];
    let dayFive = city.list[31];
    let rawJson = JSON.stringify(dayOne);
    let json = JSON.parse(rawJson);
    console.log(list)
    for(i = 0; i < 1; i++) {

        let forecast = $('<div>').html(`<div class="card-forecast">
        <div class="card-header">
          ${dayOne.dt_txt}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><small>Forecast: </small>${dayOne.weather[0].description}</li>
          <li class="list-group-item"><small>Temperature: </small>${dayOne.main.temp} </li>
          <li class="list-group-item"><small>Humidity: </small>${dayOne.main.humidity} </li>
          <li class="list-group-item"><small>Wind Speed: </small>${dayOne.wind.speed} MPH</li>
        </ul>
      </div>`)
      body.append(forecast);
    };
    // day two card
    for(i = 0; i < 1; i++) {

        let forecast = $('<div>').html(`<div class="card-forecast">
        <div class="card-header">
          ${dayTwo.dt_txt}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><small>Forecast: </small>${dayTwo.weather[0].description}</li>
        <li class="list-group-item"><small>Temperature: </small>${dayTwo.main.temp} </li>
        <li class="list-group-item"><small>Humidity: </small>${dayTwo.main.humidity}</li>
        <li class="list-group-item"><small>Wind Speed: </small>${dayTwo.wind.speed} MPH</li>
        </ul>
      </div>`)
      body.append(forecast);
    };
    // day three card
    for(i = 0; i < 1; i++) {

        let forecast = $('<div>').html(`<div class="card-forecast">
        <div class="card-header">
          ${dayThree.dt_txt}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><small>Forecast: </small>${dayThree.weather[0].description}</li>
        <li class="list-group-item"><small>Temperature: </small>${dayThree.main.temp} </li>
        <li class="list-group-item"><small>Humidity: </small>${dayThree.main.humidity}</li>
        <li class="list-group-item"><small>Wind Speed: </small>${dayThree.wind.speed} MPH</li>
        </ul>
      </div>`)
      body.append(forecast);
    };
    // day four card
    for(i = 0; i < 1; i++) {

        let forecast = $('<div>').html(`<div class="card-forecast">
        <div class="card-header">
          ${dayFour.dt_txt}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><small>Forecast: </small>${dayFour.weather[0].description}</li>
        <li class="list-group-item"><small>Temperature: </small>${dayFour.main.temp} </li>
        <li class="list-group-item"><small>Humidity: </small>${dayFour.main.humidity}</li>
        <li class="list-group-item"><small>Wind Speed: </small>${dayFour.wind.speed} MPH</li>
        </ul>
      </div>`)
      body.append(forecast);
    };
    // day five card
    for(i = 0; i < 1; i++) {

        let forecast = $('<div>').html(`<div class="card-forecast">
        <div class="card-header">
          ${dayFive.dt_txt}
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><small>Forecast: </small>${dayFive.weather[0].description}</li>
        <li class="list-group-item"><small>Temperature: </small>${dayFive.main.temp} </li>
        <li class="list-group-item"><small>Humidity: </small>${dayFive.main.humidity}</li>
        <li class="list-group-item"><small>Wind Speed: </small>${dayFive.wind.speed} MPH</li>
        </ul>
      </div>`)
      body.append(forecast);
    };
})
})




