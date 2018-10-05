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
let side1 = document.getElementById('side1');

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

    let y = "with";

    let side1string = wedMenuItem1.innerHTML.slice(wedMenuItem1.innerHTML.indexOf(y) + y.length);
    console.log(side1string);
    let array = side1string.split(' and');
    console.log(array);
    let side1 = array[0];
    console.log(side1);
    let side2 = array[1];
    console.log(side2);

    let side2string = wedMenuItem2.innerHTML.slice(wedMenuItem2.innerHTML.indexOf(y) + y.length);
    console.log(side2string);
    let array2 = side2string.split(' and');
    console.log(array2);
    let side3 = array2[0];
    console.log(side3);
    let side4 = array2[1];
    console.log(side4);

    let side3string = wedMenuItem3.innerHTML.slice(wedMenuItem3.innerHTML.indexOf(y) + y.length);
    console.log(side3string);
    let array3 = side3string.split(' and');
    console.log(array3);
    let side5 = array3[0];
    console.log(side5);
    let side6 = array3[1];
    console.log(side6);

    let side4string = wedMenuItem4.innerHTML.slice(wedMenuItem4.innerHTML.indexOf(y) + y.length);
    console.log(side4string);
    let array4 = side4string.split(' and');
    console.log(array4);
    let side7 = array4[0];
    console.log(side7);
    let side8 = array4[1];
    console.log(side8);

    let side5string = wedMenuItem5.innerHTML.slice(wedMenuItem5.innerHTML.indexOf(y) + y.length);
    console.log(side5string);
    let array5 = side5string.split(' and');
    console.log(array5);
    let side9 = array5[0];
    console.log(side9);
    let side10 = array5[1];
    console.log(side10);

    let side6string = wedMenuItem6.innerHTML.slice(wedMenuItem6.innerHTML.indexOf(y) + y.length);
    console.log(side6string);
    let array6 = side6string.split(' and');
    console.log(array6);
    let side11 = array6[0];
    console.log(side11);
    let side12 = array6[1];
    console.log(side12);

    let side7string = wedMenuItem7.innerHTML.slice(wedMenuItem7.innerHTML.indexOf(y) + y.length);
    console.log(side7string);
    let array7 = side7string.split(' and');
    console.log(array7);
    let side13 = array7[0];
    console.log(side13);
    let side14 = array7[1];
    console.log(side14);

    let side8string = wedMenuItem8.innerHTML.slice(wedMenuItem8.innerHTML.indexOf(y) + y.length);
    console.log(side8string);
    let array8 = side8string.split(' and');
    console.log(array8);
    let side15 = array8[0];
    console.log(side15);
    let side16 = array8[1];
    console.log(side16);

    let side9string = wedMenuItem9.innerHTML.slice(wedMenuItem9.innerHTML.indexOf(y) + y.length);
    console.log(side9string);
    let array9 = side9string.split(' and');
    console.log(array9);
    let side17 = array9[0];
    console.log(side17);
    let side18 = array9[1];
    console.log(side18);

    let side10string = wedMenuItem10.innerHTML.slice(wedMenuItem10.innerHTML.indexOf(y) + y.length);
    console.log(side10string);
    let array10 = side10string.split(' and');
    console.log(array);
    let side19 = array10[0];
    console.log(side1);
    let side20 = array10[1];
    console.log(side20);
  } else {
    alert("Connection to the menu isn't working, try again later.");
  }
};