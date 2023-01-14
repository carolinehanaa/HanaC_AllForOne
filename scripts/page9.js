
let pickerReturn = "";

let pg9Submit1 = document.getElementById("pg9Submit1");
let pg9Submit2 = document.getElementById("pg9Submit2");
let pg9Submit3 = document.getElementById("pg9Submit3");
let pg9Result = document.getElementById("pg9Result");

pg9Submit1.addEventListener("click", function () {
    urlCall("https://carolineallforone.azurewebsites.net/oneforall/picker/restaurant")
})

pg9Submit2.addEventListener("click", function () {
    urlCall("https://carolineallforone.azurewebsites.net/oneforall/picker/fastfood")
})

pg9Submit3.addEventListener("click", function () {
    urlCall("https://carolineallforone.azurewebsites.net/oneforall/picker/dessert")
})



function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            pg9Result.textContent = data
            console.log(data)
        }
    )
}