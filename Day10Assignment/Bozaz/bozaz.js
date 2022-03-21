// Points for using form
// 1. wrap every input inside form tag
// 2. instead of taking button, use input type=submit
// 3. Add eventListener to form tag
// 4. event name should be submit
// 5. whenever you use forms, it will try to send data to server, in this process page is getting refreshed -- it is default behaviour
//6. we should prevent that default behaviour - event.preventDefault()

document.querySelector("form").addEventListener("submit",bozazList);
function bozazList(){
    event.preventDefault();
    var prodCategory = document.querySelector("#category").value;
    var prodName = document.querySelector("#name").value;
    var prodPrice = document.querySelector("#price").value;

    var tr = document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=prodCategory;

    var td2=document.createElement("td");
    td2.innerText=prodName;

    var td3=document.createElement("td");
    td3.innerText=prodPrice;

    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
}