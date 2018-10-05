

var requestURL = 'https://entree-f18.herokuapp.com/v1/menu';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {

  if (request.status >= 200 && request.status < 400) {

    wedMenuItem1.innerHTML = request.response.menu_items[0].description;
    wedMenuItem2.innerHTML = request.response.menu_items[1].description;
    wedMenuItem3.innerHTML = request.response.menu_items[2].description;
    wedMenuItem4.innerHTML = request.response.menu_items[3].description;
    wedMenuItem5.innerHTML = request.response.menu_items[4].description;
    wedMenuItem6.innerHTML = request.response.menu_items[5].description;
    wedMenuItem7.innerHTML = request.response.menu_items[6].description;
    wedMenuItem8.innerHTML = request.response.menu_items[7].description;
    wedMenuItem9.innerHTML = request.response.menu_items[8].description;
    wedMenuItem10.innerHTML = request.response.menu_items[9].description;
    console.log(request.response.menu_items[0].description);
  } else {
    alert("Connection to the menu isn't working, try again later.");
  }
};