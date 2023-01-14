

let pg3Input1 = document.getElementById("pg3Input1");
let pg3Input2 = document.getElementById("pg3Input2");
let pg3Result = document.getElementById("pg3Result");
let pg3Submit = document.getElementById("pg3Submit");

let pg3SavedInput = "";
let pg3Url = "";

pg3Submit.addEventListener("click", function () {
    pg3Api(pg3Input1, pg3Input2)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg3Result.textContent = data
            console.log(data)
        }
    )
}

function pg3Api(pg3Input1, pg3Input2) {
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]*$/;
    if (pg3Input1.value.match(letters) && pg3Input2.value.match(numbers) && pg3Input1.value != "" && pg3Input2.value != "") {
        pg3savedInput = pg3Input1.value + "/" + pg3Input2.value;
        pg3Url = "https://carolineallforone.azurewebsites.net/oneforall/questions/" + pg3savedInput;
        urlCall(pg3Url);
    } else {
        pg3Result.textContent = "Enter a valid response";
    }
}



