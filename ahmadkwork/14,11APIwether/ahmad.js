// api.openweathermap.org/data/2.5/weather?q=London,uk
// url: 'https://api.openweathermap.org/data/2.5/weather?q='+num+'&APPID=cad1d56316eb2c0023f1c94440ab961a',
$("#btn1").click(() => {
  var city = $("#inputCity").val();
  // var htmlString1 = '';
  var units = '&units=metric'
  var appid = '&APPID=cad1d56316eb2c0023f1c94440ab961a'
  var clientId = '&client_id=49224c4f10a6694da53e2ee68caf75e8d6cad08c6b7c86e55dc60f81e9375220'
  console.log(city);
// -------------------------------------------------------------------------------------
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city + units +appid,
    type: "GET",
    dataType: "json",
    success: data => {
    
    $('#temperature').append(data.main.temp+'C')
    $("#result").append(city.toUpperCase());
    $('#humidity').append(data.main.humidity+'%');
    $('#windSpeed').append(data.wind.speed+'mph');
    $('#visibility').append(data.visibility+'mph');
  
    var weathertype =  data.weather[0].main;
    console.log(weathertype);
      if(weathertype == "Mist"){
        console.log(weathertype);
        $('#icons').css("background-image", "url(./rsz_durst.png)")
      } else if (weathertype == "Drizzle") {
        console.log(weathertype);
        $('#icons').css("background-image", "url(./rsz_gewetter.png)")
      }else if (weathertype == "Rian") {
        console.log(weathertype);
        $('#icons').css("background-image", "url(./rsz_rain.png)")
      }
      else{
        $('#icons').css("background-image", "url(./rsz_normal.png)")
      }
    },
    error: error => {
      console.log("there is an error" + error);
    }
  });
// -------------------------------------------------------------------------------------
$.ajax({
    url:
      "https://api.unsplash.com/search/photos?query=" +city+clientId ,
    type: "GET",
    dataType: "json",

    success: data => {
     var imageAttr = data.results[0].urls.full;
     console.log(imageAttr);
      $('body').css('background-image',"url('"+ imageAttr + "')");
      },
    error: error => {
      console.log("there is an error" + error);
    }
  });

});

// https://api.unsplash.com/search/photos?client_id=49224c4f10a6694da53e2ee68caf75e8d6cad08c6b7c86e55dc60f81e9375220&query=bonn
