var postCounter = 0;
var gifContainer = document.getElementById("gif-info");
var btn = document.getElementById("btn");
var apiKey = "VkEgwdTR7X2U3xlzcZ815fmdQUsUSDjA";

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  //ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q=laptop');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      console.log(ourData);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  //btn.classList.add("hide-me");

});

function renderHTML(data) {
  var htmlString = "";
  //<img src="https://media4.giphy.com/media/3oKGzgNfssFG1xlwC4/giphy-downsized.gif?cid=3fc0760798s8igjj2lw5a418pug09gdznjqr8g93ke5a70b9&amp;rid=giphy-downsized.gif" alt="funny GIF" width="10%">

  htmlString += '<p> id=';
  htmlString += data.data[postCounter].id
  htmlString += '</p> <img src="';
  htmlString += data.data[postCounter].images.downsized.url;
  htmlString += '"> <br>';


  console.log(data.data[postCounter].images.downsized.url);
  console.log(htmlString);
  gifContainer.insertAdjacentHTML('beforeend', htmlString);
  postCounter++;
}
