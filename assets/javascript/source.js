$(document).ready(function () {

  //sidenav
  const sideNav = document.querySelector('.sidenav');
  M.Sidenav.init(sideNav, {});

  $('.slider').slider();

  // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
  var queryURL = "https://www.hikingproject.com/data/get-trails?lat=34.052235&lon=-118.243683&maxDistance=15&key=200415127-68adde2ff6be3226f8cb65a7535b3ecc";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response.trails);
    for (var i = 0; i < response.trails.length; i++) {
      $(".test").append(
        "<div class='col s12 m4'>" +
        "<div class='card large'>" +
        "<div class='card-image'>" +
        "<img class='generatedImgs' src=" + response.trails[i].imgSmallMed + ">" +
        "<span class='card-title'>" + response.trails[i].name + "</span>" +
        "</div>" +
        "<div class='card-content'>" + response.trails[i].location +
        "<br>Summary: " + response.trails[i].summary +
        "<br>Length: " + response.trails[i].length + " miles" +
        "<br>Ascent: " + response.trails[i].high + " ft" +
        "<br>Condition: " + response.trails[i].conditionStatus + "</div>" +
        "<div class='card-action'>" +
        "<a class='waves-effect waves-light btn-large' target='_blank' href=" + response.trails[i].url + ">Details at Hiking Project</a>" +
        "</div>" +
        "</div>" +
        "</div>")
    }
  });

  // <!-- Cards -->


});


// $(document).ready(function () {
//     //sidenav
//     const sideNav = document.querySelector('.sidenav');
//     M.Sidenav.init(sideNav, {});

//     $('.slider').slider();
//     });
