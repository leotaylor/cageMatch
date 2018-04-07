let firstPlayer = "";
let secondPlayer = "";

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (competitor1, competitor2, badges) =>{
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
    // if winner then announce winner and show badges: 
    // for(let i=0; i<badges.length; i++){
    //     domString +=    `<div class="col-xs-6 col-md-3 col-lg-1">`;
    //     domString +=        `<img src="${badges[i].icon_url}">`;
    //     domString +=    `</div>`;
    // }
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
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", player1);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "https://teamtreehouse.com/leotaylor2.json");  
    myRequest.send(); 
};

function player1 (){
    const player1JSON = JSON.parse(this.responseText);
    xhr2(player1JSON);
}

const xhr2 = (player1JSON) =>{
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", nestedFunction);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "https://teamtreehouse.com/adamwieckert.json");  
    myRequest.send(); 
    function nestedFunction () {
        const player2JSON = JSON.parse(this.responseText);
        buildDomString(player1JSON, player2JSON);
    }
}



// function executeThisCodeAfterFileLoaded (){
//     const data = JSON.parse(this.responseText);
//     buildDomString(data, data.badges);
// };

