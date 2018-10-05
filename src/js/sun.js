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
let sunMenuItem11 = document.getElementById('sunMenuItem11');
let sunMenuItem12 = document.getElementById('sunMenuItem12');
let sunSide1 = document.getElementById('side1');
let sunSide2 = document.getElementById('side2');
let sunSide3 = document.getElementById('side3');
let sunSide4 = document.getElementById('side4');
let sunSide5 = document.getElementById('side5');
let sunSide6 = document.getElementById('side6');
let sunSide7 = document.getElementById('side7');
let sunSide8 = document.getElementById('side8');
let sunSide9 = document.getElementById('side9');
let sunSide10 = document.getElementById('side10');
let sunSide11 = document.getElementById('side11');
let sunSide12 = document.getElementById('side12');
let sunSide13 = document.getElementById('side13');
let sunSide14 = document.getElementById('side14');
let sunSide15 = document.getElementById('side15');
let sunSide16 = document.getElementById('side16');
let sunSide17 = document.getElementById('side17');
let sunSide18 = document.getElementById('side18');
let sunSide19 = document.getElementById('side19');
let sunSide20 = document.getElementById('side20');
let sunSide21 = document.getElementById('side21');
let sunSide22 = document.getElementById('side22');
let sunSide23 = document.getElementById('side23');
let sunSide24 = document.getElementById('side24');

var requestURLtwo = 'https://entree-f18.herokuapp.com/v1/menu/12';
var requesttwo = new XMLHttpRequest();
requesttwo.open('GET', requestURLtwo);
requesttwo.responseType = 'json';
requesttwo.send();

requesttwo.onload = function() {

  if (requesttwo.status >= 200 && requesttwo.status < 400){

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
      sunMenuItem11.innerHTML = requesttwo.response.menu_items[10].description;
      sunMenuItem12.innerHTML = requesttwo.response.menu_items[11].description;
      console.log(requesttwo.response.menu_items[0].description);


      let y = "with";

      let side1string = sunMenuItem1.innerHTML.slice(sunMenuItem1.innerHTML.indexOf(y) + y.length);
      console.log(side1string);
      let array = side1string.split(' and');
      console.log(array);
      let side1 = array[0];
      sunSide1.innerHTML = side1;
      let side2 = array[1];
      console.log(side2);
      sunSide2.innerHTML = side2;

      let side2string = sunMenuItem2.innerHTML.slice(sunMenuItem2.innerHTML.indexOf(y) + y.length);
      console.log(side2string);
      let array2 = side2string.split(' and');
      console.log(array2);
      let side3 = array2[0];
      console.log(side3);
      sunSide3.innerHTML = side3;
      let side4 = array2[1];
      console.log(side4);
      sunSide4.innerHTML = side4;

      let side3string = sunMenuItem3.innerHTML.slice(sunMenuItem3.innerHTML.indexOf(y) + y.length);
      console.log(side3string);
      let array3 = side3string.split(' and');
      console.log(array3);
      let side5 = array3[0];
      console.log(side5);
      sunSide5.innerHTML = side5;
      let side6 = array3[1];
      console.log(side6);
      sunSide6.innerHTML = side6;

      let side4string = sunMenuItem4.innerHTML.slice(sunMenuItem4.innerHTML.indexOf(y) + y.length);
      console.log(side4string);
      let array4 = side4string.split(' and');
      console.log(array4);
      let side7 = array4[0];
      console.log(side7);
      sunSide7.innerHTML = side7;
      let side8 = array4[1];
      console.log(side8);
      sunSide8.innerHTML = side8;

      let side5string = sunMenuItem5.innerHTML.slice(sunMenuItem5.innerHTML.indexOf(y) + y.length);
      console.log(side5string);
      let array5 = side5string.split(' and');
      console.log(array5);
      let side9 = array5[0];
      console.log(side9);
      sunSide9.innerHTML = side9;
      let side10 = array5[1];
      console.log(side10);
      sunSide10.innerHTML = side10;

      let side6string = sunMenuItem6.innerHTML.slice(sunMenuItem6.innerHTML.indexOf(y) + y.length);
      console.log(side6string);
      let array6 = side6string.split(' and');
      console.log(array6);
      let side11 = array6[0];
      console.log(side11);
      sunSide11.innerHTML = side11;
      let side12 = array6[1];
      console.log(side12);
      sunSide12.innerHTML = side12;

      let side7string = sunMenuItem7.innerHTML.slice(sunMenuItem7.innerHTML.indexOf(y) + y.length);
      console.log(side7string);
      let array7 = side7string.split(' and');
      console.log(array7);
      let side13 = array7[0];
      console.log(side13);
      sunSide13.innerHTML = side13;
      let side14 = array7[1];
      console.log(side14);
      sunSide14.innerHTML = side14;

      let side8string = sunMenuItem8.innerHTML.slice(sunMenuItem8.innerHTML.indexOf(y) + y.length);
      console.log(side8string);
      let array8 = side8string.split(' and');
      console.log(array8);
      let side15 = array8[0];
      sunSide15.innerHTML = side15;
      console.log(side15);
      let side16 = array8[1];
      console.log(side16);
      sunSide16.innerHTML = side16;

      let side9string = sunMenuItem9.innerHTML.slice(sunMenuItem9.innerHTML.indexOf(y) + y.length);
      console.log(side9string);
      let array9 = side9string.split(' and');
      console.log(array9);
      let side17 = array9[0];
      console.log(side17);
      sunSide17.innerHTML = side17;
      let side18 = array9[1];
      console.log(side18);
      sunSide18.innerHTML = side18;

      let side10string = sunMenuItem10.innerHTML.slice(sunMenuItem10.innerHTML.indexOf(y) + y.length);
      console.log(side10string);
      let array10 = side10string.split(' and');
      console.log(array10);
      let side19 = array10[0];
      console.log(side19);
      sunSide19.innerHTML = side19;
      let side20 = array10[1];
      console.log(side20);
      sunSide20.innerHTML = side20;

      let side11string = sunMenuItem11.innerHTML.slice(sunMenuItem11.innerHTML.indexOf(y) + y.length);
      console.log(side11string);
      let array11 = side11string.split(' and');
      console.log(array11);
      let side21 = array11[0];
      console.log(side21);
      sunSide21.innerHTML = side21;
      let side22 = array11[1];
      console.log(side22);
      sunSide22.innerHTML = side22;

      let side12string = sunMenuItem12.innerHTML.slice(sunMenuItem12.innerHTML.indexOf(y) + y.length);
      console.log(side12string);
      let array12 = side12string.split(' and');
      console.log(array);
      let side23 = array12[0];
      console.log(side23);
      sunSide23.innerHTML = side23;
      let side24 = array12[1];
      console.log(side24);
      sunSide24.innerHTML = side24;


  }
  else {
    alert("Connection to the menu isn't working, try again later.");
  }

}
