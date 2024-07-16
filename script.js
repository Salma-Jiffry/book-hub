var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popupbox")
var addbtn = document.getElementById("btnadd")

addbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbtn = document.getElementById("cancelbook")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container = document.querySelector(".container")
var addbook = document.getElementById("addbook")
var booktitle = document.getElementById("booktitle")
var bookauthor = document.getElementById("bookauthor")
var description = document.getElementById("description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletee(event)">DELETE</button>`

    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

function deletee(event)
{
    event.target.parentElement.remove()
}