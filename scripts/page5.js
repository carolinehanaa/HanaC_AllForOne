
let pg5Input1 = document.getElementById("pg5Input1");
let pg5Input2 = document.getElementById("pg5Input2");
let pg5Input3 = document.getElementById("pg5Input3");
let pg5Input4 = document.getElementById("pg5Input4");
let pg5Input5 = document.getElementById("pg5Input5");
let pg5Input6 = document.getElementById("pg5Input6");
let pg5Input7 = document.getElementById("pg5Input7");
let pg5Input8 = document.getElementById("pg5Input8");
let pg5Input9 = document.getElementById("pg5Input9");
let pg5Input10 = document.getElementById("pg5Input10");
let pg5Result = document.getElementById("pg5Result");
let pg5SubBtn = document.getElementById("pg5Submit");

let pg5savedInput = "";
let pg5Url = "";


pg5Submit.addEventListener("click", function () {
     pg5Api(pg5Input1, pg5Input2, pg5Input3, pg5Input4, pg5Input5, pg5Input6, pg5Input7, pg5Input8, pg5Input9, pg5Input10)
})

function urlCall(url) {
     fetch(url).then(
          response => response.text()
     ).then(
          data => {
               pg5Result.textContent = data
               console.log(data)
          }
     )
}

function pg5Api(pg5Input1, pg5Input2, pg5Input3, pg5Input4, pg5Input5, pg5Input6, pg5Input7, pg5Input8, pg5Input9, pg5Input10) {
     var letters = /^[A-Za-z]+$/;
     if (pg5Input1.value.match(letters) && pg5Input2.value.match(letters) && pg5Input3.value.match(letters) && pg5Input4.value.match(letters) && pg5Input5.value.match(letters) && pg5Input6.value.match(letters) && pg5Input7.value.match(letters) && pg5Input8.value.match(letters) && pg5Input9.value.match(letters) && pg5Input10.value.match(letters) && pg5Input1.value != "" && pg5Input2.value != "" && pg5Input3.value != "" && pg5Input4.value != "" && pg5Input5.value != "" && pg5Input6.value != "" && pg5Input7.value != "" && pg5Input8.value != "" && pg5Input9.value != "" && pg5Input10.value != "") {
          
        pg5savedInput = pg5Input1.value + "/" + pg5Input2.value + "/" + pg5Input3.value + "/" + pg5Input4.value + "/" + pg5Input5.value + "/" + pg5Input6.value + "/" + pg5Input7.value + "/" + pg5Input8.value + "/" + pg5Input9.value + "/" + pg5Input10.value;
          
        pg5Url = "https://carolineallforone.azurewebsites.net/oneforall/Fill/" + pg5savedInput;
          urlCall(pg5Url);
     } else {
          pg5Result.textContent = "Enter a valid response";
     }
}