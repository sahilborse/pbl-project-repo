console.log("Hello");
let input=document.querySelector("#INPUT")
let output=document.querySelector("#OUTPUT")
let tran_btn=document.querySelector("#btn-tran")

let url = "https://api.funtranslations.com/translate/groot.json"
function transLate(input){
    console.log(url + "?" + "text=" + input)
    return url + "?" + "text=" + input
}

function errorHandler(error){
    console.log("An error has occured please try again later");
    alert("error has occured try again after sometime")
}

function clickHandler(){
   let intext=input.value
    console.log(intext)
    fetch(transLate(intext))
        .then(response=>response.json())
        .then(json => {
            let newText =json.contents.translated;
             output.innerText = newText;
            })
        .catch(errorHandler)

}
tran_btn.addEventListener("click", clickHandler)
