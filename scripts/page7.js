let reverseUrl = "https://carolineallforone.azurewebsites.net/oneforall/reverse/look";
let reverseReturn = "";


let pg7Input1 = document.getElementById("pg7Input1");
let pg7Result = document.getElementById("pg7Result");
let pg7Submit = document.getElementById("pg7Submit");

let pg7SavedInput = "";
let pg7Url = "";

pg7Submit.addEventListener("click", function () {
    pg7Api(pg7Input1)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg7Result.textContent = data
            console.log(data)
        }
    )
}

function pg7Api(pg7Input1 ) {
    var numbers = /^[0-9]*$/;
    if (pg7Input1.value.match(numbers)) {
        pg7SavedInput = pg7Input1.value ;
        pg7Url = "https://carolineallforone.azurewebsites.net/oneforall/oddoreven/" + pg7SavedInput;
        urlCall(pg7Url);
    } else {
        pg7Result.textContent = "Enter a valid response";
    }
}
