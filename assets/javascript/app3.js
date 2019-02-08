var apiPath = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
var zip = 90035; // input.value
var apiKey= '?apikey=rVL2x1l1YoBDcq5AOfhK8JHDRipgRzr6';


var queryURL = apiPath + zip + apiKey;
console.log(queryURL);



$.ajax({
    url: queryURL,
    method:"GET"
}).then(function(response) {
   console.log(response.Headline);
   for(var i = 0; i < response.Headline.length; i++){
       var newText = moment(response.Headline[i].Text); 
   }
   for(var i = 0; i < response.DailyForecasts.length; i++){
        var newDate = moment(response.DailyForecasts[i].Date).format('MMMM Do YYYY, h:mm:ss a');
       $('.weather').append(
           "<div class='col l3 s12 m4'>" +
           "<div class='card small green'>" + 
           "<span class='card-title white-text'>"+ newDate  + "</span>" +
           "<div class='card-content white-text'>" + "<br>Low: " + response.DailyForecasts[i].Temperature.Minimum.Value + "&#176;F" + 
            "<br>High: " + response.DailyForecasts[i].Temperature.Maximum.Value + "&#176;F" + "<br> Summary:" + newText +
           "</div>" +
            "<div class='card-action'>" +
           "</div>" +
           "</div>")
    }  
});