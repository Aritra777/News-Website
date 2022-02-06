function coronaData() {
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
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
}

let responseData = coronaData();
console.log(responseData);
