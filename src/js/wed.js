let wedMenuItem1 = document.getElementById('wedMenuItem1');
let wedMenuItem2 = document.getElementById('wedMenuItem2');
let wedMenuItem3 = document.getElementById('wedMenuItem3');
let wedMenuItem4 = document.getElementById('wedMenuItem4');
let wedMenuItem5 = document.getElementById('wedMenuItem5');
let wedMenuItem6 = document.getElementById('wedMenuItem6');
let wedMenuItem7 = document.getElementById('wedMenuItem7');
let wedMenuItem8 = document.getElementById('wedMenuItem8');
let wedMenuItem9 = document.getElementById('wedMenuItem9');
let wedMenuItem10 = document.getElementById('wedMenuItem10');

var requestURL = 'https://entree-f18.herokuapp.com/v1/menu';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {

  if (request.status >= 200 && request.status < 400){

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
  }
  else {
    alert("Connection to the menu isn't working, try again later.");
  }

}
