var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "63d6a43b5126945faa84db41168f3282");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");
const body = document.querySelector("body");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// >>>>>>>>>>>leagues: france=61 england=39 italy=135 Germany=78 spain=140

const urlFR = "https://v3.football.api-sports.io/standings?league=61&season=2022";
const urlUK = "https://v3.football.api-sports.io/standings?league=39&season=2022";
const urlIT = "https://v3.football.api-sports.io/standings?league=135&season=2022";
const urlES = "https://v3.football.api-sports.io/standings?league=140&season=2022";
const urlDE = "https://v3.football.api-sports.io/standings?league=78&season=2022";

const pl = document.getElementById("pl");
const liga = document.getElementById("liga");
const serie = document.getElementById("serie");
const bund = document.getElementById("bund");
const l1 = document.getElementById("l1");
let urlDef = urlFR;

//set league country
pl.addEventListener("click", () =>{
  urlDef = urlUK;
  getData();
  setBg();
});
l1.addEventListener("click", () =>{
  urlDef = urlFR;
  getData();
  setBg();
});
liga.addEventListener("click", () =>{
  urlDef = urlES;
  getData();
  setBg();
});
serie.addEventListener("click", () =>{
  urlDef = urlIT;
  getData();
  setBg();
});
bund.addEventListener("click", () =>{
  urlDef = urlDE;
  getData();
  setBg();
});


getData();
function getData(){

    fetch(urlDef, 
    requestOptions)

    .then(response => response.json()
    
    .then(data =>{
    
    const list = data["response"];

    let standings = (list[0].league.standings[0]);
console.log(standings)
    let goodArray = 
    standings.map((row) => ({
      rank: row.rank,
      teamName: row.team.name,
      logoid: row.team.id,
      points: row.points,
      played: row.all.played,
      win: row.all.win,
      draw: row.all.draw,
      lose: row.all.lose,
      goalsFor: row.all.goals.for,
      goalsAgainst: row.all.goals.against,
      diff: row.goalsDiff,
    }))

    show(goodArray);

   // Function to define innerHTML for HTML table
  function show(goodArray) {
    let tab = 
      `<tr>
        <th>Pos.</th>
        <th></th>
        <th></th>
        <th>Points</th>
        <th>Played</th>
        <th>Won</th>
        <th>Draw</th>
        <th>Lost</th>
        <th>Goals for</th>
        <th>Goals against</th>
        <th>Goals diff.</th>
       </tr>`;
  
  // Loop to access all rows 
  for (let r of goodArray) {
      tab += `<tr> 
  <td>${r.rank} </td>
  <td><img src="./images/${r.logoid}.png"></td>
  <td id="teamName">${r.teamName}</td>
  <td id="points">${r.points}</td> 
  <td>${r.played}</td>          
  <td>${r.win}</td>          
  <td>${r.draw}</td>          
  <td>${r.lose}</td>          
  <td>${r.goalsFor}</td>          
  <td>${r.goalsAgainst}</td>          
  <td>${r.diff}</td>          
  </tr>`;
  }
  // Setting table innerHTML
  document.querySelector("#table").innerHTML = tab;
  }
 
   }))
}

// Cycle through background images on load
  body.addEventListener("onload", setBg())

  function setBg(){
    let rand = Math.floor((Math.random() * 6) + 1); 
    let backGimageurl = `url(./images/footPic${rand}.jpg)`;
    body.style.backgroundImage = (backGimageurl);
}

//drawer menu
const slider = document.querySelector(".slidebtn");
const slider2 = document.querySelector(".slidebtn2");
const sidenav = document.querySelector(".sidenav");
const toHide = document.querySelector(".hide");

slider.addEventListener("click", function(){
  sidenav.classList.toggle("sidenav-closed");
  toHide.classList.toggle("span-closed");
  slider.style.display = "none";
  slider2.style.display = "inline";
});

slider2.addEventListener("click", function() 
{sidenav.classList.toggle("sidenav-closed");
toHide.classList.toggle("span-closed");
slider.style.display = "block";
slider2.style.display = "none";
});


