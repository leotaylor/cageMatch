
const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (competitor1, competitor2, player1badges, player2badges) =>{
    let domString ="";
    domString += `<div class="row">`;
    domString +=    `<div id="competiterOne" class="col-md-6">`;
    domString +=        `<h1>${competitor1.name}</h1>`;
    domString +=        `<img src="${competitor1.gravatar_url}">`;
    domString +=        `<h3>${competitor1.points.total}</h3>`;
    domString +=    `</div>`;
    domString +=    `<div id="competitorTwo" class="col-md-6">`;
    domString +=        `<h1>${competitor2.name}</h1>`;
    domString +=        `<img src="${competitor2.gravatar_url}">`;
    domString +=        `<h3>${competitor2.points.total}</h3>`;
    domString +=    `</div>`;
    domString += `</div>`;
    if(competitor1.points.total > competitor2.points.total){
        domString += `<div class="row">`;
        domString +=    `<div class="col-md-6 col-md-offset-3" id="winner">`;
        domString +=        `<h1>${competitor1.name} is the WINNER!!!</h1>`;
        domString +=    `</div>`;
        domString += `</div>`;
        for(let i=0; i<player1badges.length; i++){
            domString +=    `<div class="col-xs-6 col-md-2 col-lg-1">`;
            domString +=        `<img id="badge" src="${player1badges[i].icon_url}">`;
            domString +=    `</div>`;
        }
    }
        else{
            domString += `<div class="row">`;
            domString +=    `<div class="col-md-6 col-md-offset-3" id="winner">`;
            domString +=        `<h1>${competitor2.name} is the WINNER!!!</h1>`;
            domString +=    `</div>`;
            domString += `</div>`;
            for(let i=0; i<player2badges.length; i++){
                domString +=    `<div class="col-xs-6 col-md-2 col-lg-1">`;
                domString +=        `<img id="badge" src="${player2badges[i].icon_url}">`;
                domString +=    `</div>`;
            }
        }
    printToDom(domString, "output");
}

function executeThisCodeIfXHRFails(){
    console.log("Problemo Señor!");
}

// CLICKING ON THE BUTTON
const startAFight = () =>{
    const button = document.getElementById("pushIt");
        button.addEventListener("click", iClickedIt);
    }
    
const iClickedIt = (e) =>{
    startApplication();
}

const startApplication = () => {
    xhr1();
};

startAFight();

// --------------------------XHR REQUESTS-----------------------
const xhr1 = () =>{
    const player1name = document.getElementById("input1").value;
    const player1Url = `https://teamtreehouse.com/${player1name}.json`;
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", player1);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", player1Url);  
    myRequest.send(); 
};

function player1 (){
    const player1JSON = JSON.parse(this.responseText);
    xhr2(player1JSON);
}

const xhr2 = (player1JSON) =>{
    const player2name = document.getElementById("input2").value;
    const player2Url = `https://teamtreehouse.com/${player2name}.json`;
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", nestedFunction);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", player2Url);  
    myRequest.send(); 
    function nestedFunction () {
        const player2JSON = JSON.parse(this.responseText);
        buildDomString(player1JSON, player2JSON, player1JSON.badges, player2JSON.badges);
    }
}

