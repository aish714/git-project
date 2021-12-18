function loadjson(file,callback){
    var aish =new XMLHttpRequest();
    aish.overrideMimeType("application/json");
    aish.open("GET",file,true);
    aish.onreadystatechange=function(){
        if(aish.readyState===4 && aish.status=="200"){
            callback(aish.responseText);
        }
    };
    aish.send(null);
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    display(data.cards)
})

function display (mbl){
var deck=document.querySelector(".card-deck")
deck.classList.add("text-center");

console.log(deck)

for( var i in mbl){
    // console.log(mbl[i].img)
    var cardiv=document.createElement("div")
    
    
    cardiv.classList.add("card")
    var cardimg=document.createElement("img")
    // console.log(cardimg)
    cardimg.src=mbl[i].img
    cardiv.appendChild(cardimg)
    deck.appendChild(cardiv)

var cname=document.createElement("h2")
cname.textContent=mbl[i].name;
cardiv.appendChild(cname)


var price=document.createElement("h2")
price.textContent=mbl[i].price;
cardiv.appendChild(price)


var offer=document.createElement("h2")
offer.textContent=mbl[i].offer;
cardiv.appendChild(offer)

var btn=document.createElement("button")
btn.classList.add("btn-success")
btn.textContent=mbl[i].button;
cardiv.appendChild(btn)

}



}