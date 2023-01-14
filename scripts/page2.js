let pg2NumInput1 = document.getElementById("pg2NumInput1");
let pg2NumInput2 = document.getElementById("pg2NumInput2");
let pg2Result = document.getElementById("pg2Result");
let pg2Submit = document.getElementById("pg2Submit");

let pg2SavedInput = "";
let pg2Url = "";

pg2Submit.addEventListener("click", function () {
    pg2Api(pg2NumInput1, pg2NumInput2)
})

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg2Result.textContent = data
            console.log(data)
        }
    )
}

function pg2Api(pg2NumInput1, pg2NumInput2) {
    var numbers = /^[0-9]*$/;
    if (pg2NumInput1.value.match(numbers) && pg2NumInput2.value.match(numbers) && pg2NumInput1.value != "" && pg2NumInput2.value != "") {
        pg2SavedInput = pg2NumInput1.value + "/" + pg2NumInput2.value;
        pg2Url = "https://carolineallforone.azurewebsites.net/oneforall/2numbers/" + pg2SavedInput;
        urlCall(pg2Url);
    } else {
        pg2Result.textContent = "Enter a valid response";
    }
}



