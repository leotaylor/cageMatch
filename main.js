const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};


const buildDomString = (competitors, badges) =>{
    let domString ="";
    domString += `<div class="row">`;
    domString +=    `<div id="competiterOne" class="col-md-6">`;
    domString +=        `<h1>${competitors.name}</h1>`;
    domString +=        `<img src="${competitors.gravatar_url}">`;
    domString +=        `<h3>${competitors.points.total}</h3>`;
    domString +=    `</div>`;
    domString +=    `<div id="competitorTwo" class="col-md-6">`;
    domString +=        `<h1>${competitors.name}</h1>`;
    domString +=        `<img src="${competitors.gravatar_url}">`;
    domString +=        `<h3>${competitors.points.total}</h3>`;
    domString +=    `</div>`;
    domString += `</div>`;
    // if winner then announce winner and show badges: 
    for(let i=0; i<badges.length; i++){
        domString +=    `<div class="col-xs-6 col-md-3 col-lg-1">`;
        domString +=        `<img src="${badges[i].icon_url}">`;
        domString +=    `</div>`;
    }
    printToDom(domString, "output");
}

function executeThisCodeIfXHRFails(){
    console.log("Problemo Señor!");
}

function executeThisCodeAfterFileLoaded (){
    const data = JSON.parse(this.responseText);
    buildDomString(data, data.badges);
};

const genericRequest = (successFunction) => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", successFunction);
    myRequest.addEventListener("error", executeThisCodeIfXHRFails);
    myRequest.open("GET", "https://teamtreehouse.com/leotaylor2.json");  
    myRequest.send(); 
};

const startApplication = () => {
    genericRequest(executeThisCodeAfterFileLoaded);
};

startApplication();