// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",evaluation);

function evaluation(){
    event.preventDefault();
    var profile = document.querySelector("#image").value;
    var name = document.querySelector("#name").value;
    var batchName = document.querySelector("#batch").value;
    var dsaMarks = document.querySelector("#dsa").value;
    var csMarks = document.querySelector("#cs").value;
    var coding = document.querySelector("#coding").value;
    var ob=Number(dsaMarks)+Number(csMarks)+Number(coding);
    var per=(ob/30)*100;
    var status;
    console.log(ob);
    image.setAttribute("src","https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652__340.png");
    var tr= document.createElement("tr")
    var td1=document.createElement("td");
    td1.innerHTML=profile;

    var td2=document.createElement("td");
    td2.innerText=name;

    var td3=document.createElement("td");
    td3.innerText=batchName;

    var td4=document.createElement("td")
    td4.innerText=dsaMarks;

    var td5=document.createElement("td")
    td5.innerText=csMarks;

    var td6=document.createElement("td")
    td6.innerText=coding;

    var td7=document.createElement("td")
    td7.innerText=per;

    var td8=document.createElement("td")
    if(per>=50){
        status="Regular";
        td8.innerText=status;
        td8.style.backgroundColor="green";
        
    }else{
        status="Async"
        td8.innerText=status;
        td8.style.backgroundColor="red";
    }


    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);

}