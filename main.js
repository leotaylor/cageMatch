const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};


const buildDomString = (competitors) =>{
    let domString ="";
    for(let i=0; i<competitors.length; i++){
        domString +=    `<div class="col-xs-6 col-md-3 col-lg-4">`;
        domString +=        `<img src="${competitors[i].icon_url}">`;
        domString +=    `</div>`;
    }
    printToDom(domString, "output");
}

function executeThisCodeIfXHRFails(){
    console.log("Problemo Señor!");
}

function executeThisCodeAfterFileLoaded (){
    const data = JSON.parse(this.responseText);
    buildDomString(data.badges);
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