
let nameInput = document.getElementById("floatingTextarea");
let helloReturn = document.getElementById("helloResult");
let helloSubBtn = document.getElementById("helloSubmit");

let savedInput = "";
let sayHelloUrl = "";


helloSubBtn.addEventListener("click", function () {
     helloApi(nameInput)
})

function urlCall(url) {
     fetch(url).then(
          response => response.text()
     ).then(
          data => {
               helloReturn.textContent = data
               console.log(data)
          }
     )
}

function helloApi(nameInput) {
     var letters = /^[A-Za-z]+$/;
     if (nameInput.value.match(letters)) {
          savedInput = nameInput.value;
          sayHelloUrl = "https://carolineallforone.azurewebsites.net/oneforall/hello/" + savedInput;
          urlCall(sayHelloUrl);
     } else {
          helloReturn.textContent = "Enter a valid response";
     }
}