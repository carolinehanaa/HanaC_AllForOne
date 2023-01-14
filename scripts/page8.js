
let pg8Input = document.getElementById("pg8Input");
let pg8Result1 = document.getElementById("pg8Result1");
let pg8Result2 = document.getElementById("pg8Result2");
let pg8Result3 = document.getElementById("pg8Result3");
let pg8Result4 = document.getElementById("pg8Result4");
let pg8Result5 = document.getElementById("pg8Result5");
let pg8Submit = document.getElementById("pg8Submit");

let pg8savedInput = "";
let pg8Url = "";


pg8Submit.addEventListener("click", function () {
     pg8Api(pg8Input)
})

function urlCall(url) {
     fetch(url).then(
          response => response.json()
     ).then(
          data => {
               pg8Result1.textContent = data.firstName
               pg8Result2.textContent = data.lastName
               pg8Result3.textContent = data.slackName
               pg8Result4.textContent = data.email
               pg8Result5.textContent = data.hobbies

               console.log(data)
          }
     )
}

function pg8Api(pg8Input) {
     var letters = /^[A-Za-z]+$/;
     if (pg8Input.value !="" ) {
          pg8savedInput = pg8Input.value;
          pg8Url = "https://carolineallforone.azurewebsites.net/oneforall/GetStudentByFirstName/" + pg8savedInput;
          urlCall(pg8Url);
     } else {
          pg8Result1.textContent = "Enter a valid response";
     }
}