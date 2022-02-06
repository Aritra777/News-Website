//India Data
let Itotal = document.getElementById("Itotal");
let Ideaths = document.getElementById("Ideaths");
let Irecovered = document.getElementById("Irecovered");
//World Data
let Wtotal = document.getElementById("Wtotal");
let Wdeaths = document.getElementById("Wdeaths");
let Wrecovered = document.getElementById("Wrecovered");

function IndiacoronaData() {
  fetch("https://covid-19-data.p.rapidapi.com/country/code?code=IN", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "f376382cf5msh50b2db38919edf6p1b1f22jsnd1afad0e3f31",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      Itotal.innerHTML = response[0].confirmed;
      Ideaths.innerHTML = response[0].deaths;
      Irecovered.innerHTML = response[0].recovered;
      WorldcoronaData();
    })
    .catch((error) => {
      console.log(error);
    });
}

function WorldcoronaData() {

  fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
      "x-rapidapi-key": "f376382cf5msh50b2db38919edf6p1b1f22jsnd1afad0e3f31"
    }
  })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);

        Wtotal.innerHTML = response.world_total.total_cases;
        Wdeaths.innerHTML = response.world_total.total_deaths;
        Wrecovered.innerHTML = response.world_total.total_recovered;
      })
      .catch((error) => {
        console.log(error);
      });
  
}

IndiacoronaData();

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
