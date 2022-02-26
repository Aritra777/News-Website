//India Data
let Itotal = document.getElementById("Itotal");
let Ideaths = document.getElementById("Ideaths");
let Irecovered = document.getElementById("Irecovered");
//World Data
let Wtotal = document.getElementById("Wtotal");
let Wdeaths = document.getElementById("Wdeaths");
let Wrecovered = document.getElementById("Wrecovered");

function IndiacoronaData(Obj) {
      Itotal.innerHTML = Obj.cases;
      Ideaths.innerHTML = Obj.deaths;
      Irecovered.innerHTML = Obj.total_recovered;      
}

function WorldcoronaData(Obj) {
        Wtotal.innerHTML = Obj.total_cases;
        Wdeaths.innerHTML = Obj.total_deaths;
        Wrecovered.innerHTML = Obj.total_recovered;  
}

fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "f376382cf5msh50b2db38919edf6p1b1f22jsnd1afad0e3f31"
	}
})
.then(response => {
	return response.json();
})
.then(data =>{
  IndiacoronaData(data.countries_stat[1]);
  WorldcoronaData(data.world_total);
})
.catch(err => {
	console.error(err);
});

// Corona News ---->
let url =
  "https://bing-news-search1.p.rapidapi.com/news/search?count=4&q=Corona&freshness=Day&textFormat=Raw&safeSearch=Off";
let params = {
  method: "GET",
  headers: {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host" : "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "f376382cf5msh50b2db38919edf6p1b1f22jsnd1afad0e3f31"
  },
};
fetch(url, params)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    let str = "";
    response.value.forEach((element) => {
      str += `
            <div class="card text-center" style="margin: 12px 0">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.description}</p>
                <a href=${element.url} class="btn  btn-outline-dark">Show Full News</a>
            </div>
            </div>
            `;
    });
    let coronaNews = document.getElementById("coronaNews");
    coronaNews.innerHTML = str;
  });
