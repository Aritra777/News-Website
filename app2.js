const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;



xhr.open("GET", "https://bing-news-search1.p.rapidapi.com/news/search?q=10&freshness=Day&textFormat=Raw&safeSearch=Off");
xhr.setRequestHeader("x-bingapis-sdk", "true");
xhr.setRequestHeader("x-rapidapi-host", "bing-news-search1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "f376382cf5msh50b2db38919edf6p1b1f22jsnd1afad0e3f31");

xhr.send(data);

xhr.onload = function () {
    if (this.status !== 200) {
      console.log("some Error occured");
    }
    let newsFeedHTML = "";
    let jsonResponse = JSON.parse(this.responseText);
    jsonResponse.value.forEach((element) => {
      newsFeedHTML += `
                      <div class="card my-3" style="width: 70%;">
                      <div class="card-body">
                      <div class = "card-body-top d-flex justify-content-between flex-row">
                      <div class="card-body-top-content">
                      <h5 class="card-title" id="card-title">${element.name}</h5>
                      <h6 class="card-subtitle text-muted sourceName"> Source: ${element.provider[0].name}  </h6>
                      <p class = "text-muted">Published at : ${element.datePublished}</p>
                      </div>
                      <img src=${element.image.thumbnail.contentUrl} alt="Error" class="feedImg">
                      </div>
                          <p class="card-text">${element.description}</p>
                          <button class="btn btn-outline-dark card-btns"><a href=${element.url} target="_blank" class="card-link">Show Full News</a></button>
                          <button class="btn btn-outline-dark card-btns"><a href=${element.author} target="_blank" class="card-link">Source</a></button>
                        </div>
                      </div>
                    `;
    });
  
    let newsSection = document.getElementById("newsfeed");
    newsSection.innerHTML = newsFeedHTML;
  };

//------- Sort Function --------->
xhr.addEventListener("load" , function(){
    let jsonResponse = JSON.parse(this.responseText);
    let selectBox = document.getElementById("inputGroupSelect02");
    let cards = document.querySelectorAll(".card");
    selectBox.addEventListener("change" , ()=>{
      jsonResponse.value.forEach((element,index) => {
          console.log(element.provider[0].name);
        cards[index].style.display = "none";
        if(element.provider[0].name == selectBox.value){
          cards[index].style.display = "flex";
        }
      })
  
    })
  })

  //-------Search Function -------->
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  let searchbarVal = document.getElementById("searchBar").value;
  let cardTitle = document.getElementsByClassName("card-title");
  Array.from(cardTitle).forEach(function (element, index) {
    document.getElementsByClassName("card")[index].style.display = "none";
    if (element.innerText.includes(searchbarVal)) {
      document.getElementsByClassName("card")[index].style.display = "flex";
    }
  });
});

//-------- Reset Button --------->
document.getElementById("resetBtn").addEventListener("click" , ()=>{
    window.location.reload();
})


// --------Navbar Function---------->
let navbar = document.getElementById("navbar");
let navbarHight = navbar.clientHeight;

window.addEventListener("scroll" , ()=>{
  console.log(window.pageYOffset);
  console.log(navbarHight);
  if (window.pageYOffset>navbarHight) {
    navbar.classList.add("fixed-top");
  }
  if (window.pageYOffset < navbarHight) {
    console.log("done");
    navbar.classList.remove("fixed-top");
  }
})