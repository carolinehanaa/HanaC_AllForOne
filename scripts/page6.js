
let pg6Input1 = document.getElementById("pg6Input1");
let pg6Result = document.getElementById("pg6Result");
let pg6Submit = document.getElementById("pg6Submit");

let pg6SavedInput = "";
let pg6Url = "";

pg6Submit.addEventListener("click", function () {
    pg6Api(pg6Input1)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg6Result.textContent = data
            console.log(data)
        }
    )
}

function pg6Api(pg6Input1 ) {
    var numbers = /^[0-9]*$/;
    if (pg6Input1.value.match(numbers)  && pg6Input1.value != "") {
        pg6SavedInput = pg6Input1.value ;
        pg6Url = "https://carolineallforone.azurewebsites.net/oneforall/oddoreven/" + pg6SavedInput;
        urlCall(pg6Url);
    } else {
        pg6Result.textContent = "Enter a valid response";
    }
}
