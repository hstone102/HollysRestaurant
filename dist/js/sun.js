let sunMenuItem1 = document.getElementById('sunMenuItem1');
let sunMenuItem2 = document.getElementById('sunMenuItem2');
let sunMenuItem3 = document.getElementById('sunMenuItem3');
let sunMenuItem4 = document.getElementById('sunMenuItem4');
let sunMenuItem5 = document.getElementById('sunMenuItem5');
let sunMenuItem6 = document.getElementById('sunMenuItem6');
let sunMenuItem7 = document.getElementById('sunMenuItem7');
let sunMenuItem8 = document.getElementById('sunMenuItem8');
let sunMenuItem9 = document.getElementById('sunMenuItem9');
let sunMenuItem10 = document.getElementById('sunMenuItem10');

var requestURLtwo = 'https://entree-f18.herokuapp.com/v1/menu/12';
var requesttwo = new XMLHttpRequest();
requesttwo.open('GET', requestURLtwo);
requesttwo.responseType = 'json';
requesttwo.send();

requesttwo.onload = function () {

  if (requesttwo.status >= 200 && requesttwo.status < 400) {

    sunMenuItem1.innerHTML = requesttwo.response.menu_items[0].description;
    sunMenuItem2.innerHTML = requesttwo.response.menu_items[1].description;
    sunMenuItem3.innerHTML = requesttwo.response.menu_items[2].description;
    sunMenuItem4.innerHTML = requesttwo.response.menu_items[3].description;
    sunMenuItem5.innerHTML = requesttwo.response.menu_items[4].description;
    sunMenuItem6.innerHTML = requesttwo.response.menu_items[5].description;
    sunMenuItem7.innerHTML = requesttwo.response.menu_items[6].description;
    sunMenuItem8.innerHTML = requesttwo.response.menu_items[7].description;
    sunMenuItem9.innerHTML = requesttwo.response.menu_items[8].description;
    sunMenuItem10.innerHTML = requesttwo.response.menu_items[9].description;
    console.log(requesttwo.response.menu_items[0].description);
  } else {
    alert("Connection to the menu isn't working, try again later.");
  }
};