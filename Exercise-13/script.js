let cont = document.querySelector(".cont")

function createCard(title, cName, views, monOld, dur, thmnail){
    let viewsNum;
    if(views>1000000){
        viewsNum = views/1000000 + "M"
    }
    else if(views>1000){
        viewsNum = views/1000 + "K"
    }
    else{
        viewsNum = views
    }

    let card = document.createElement("div")
    card.className = "card"
    card.setAttribute("style", "height:150px; border-radius:10px; display:flex; color:white; cursor:pointer; border:1px solid white;")
    let cardimg = document.createElement("div")
    cardimg.className = "cardimg"
    cardimg.setAttribute("style", `background: url(${thmnail}); background-size:cover; border-radius:inherit; width:30%; height:90%; margin:8px; position:relative; border:inherit;`)
    let cardinfo = document.createElement("div")
    cardinfo.innerHTML = `<span>${dur}</span>`
    cardinfo.setAttribute("style", "background-color:rgb(0,0,0,0.8); position:absolute; bottom:5px; right:5px; border-radius:5px; padding:4px")
    cardimg.appendChild(cardinfo)
    card.appendChild(cardimg)
    let data = document.createElement("div")
    data.innerHTML += `<h2>${title}</h2>`
    data.innerHTML += `<p> ${cName} • ${viewsNum} • ${monOld} months ago</p>`
    data.setAttribute("style", "padding:0 10px")
    card.appendChild(data)
    cont.append(card)
}

let add = document.getElementById("btn")
add.addEventListener("click", ()=>{
    // console.log(`button clicked.`);
    createCard("Intro to sigma Webdev", "code with harry", 750000, 5,"30:21", "card.png")
})

let rmv = document.getElementById("btn1")
rmv.addEventListener("click", ()=>{
    let lstcard = cont.lastElementChild
    if(lstcard){
        let t = confirm("really wanna remove.")
        if(t){
            cont.removeChild(lstcard)
        }
    }
    else{
        alert("No card to remove.")
    }
})