//API key 
let home = document.getElementById("home")
let general = document.getElementById("general")
let business = document.getElementById("business")
let sports = document.getElementById("sports")
let entertainment = document.getElementById("entertainment")
let technology = document.getElementById("technology")
let search = document.getElementById("searchBtn")
let newsQuery = document.getElementById("newsQuery")









var AllData = [];
let apiKey = "45c5ec7648674ebca8acde3df46171ff"
let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=45c5ec7648674ebca8acde3df46171ff"
let homeNews = "https://newsapi.org/v2/top-headlines?country=in&apiKey=45c5ec7648674ebca8acde3df46171ff"
let generalNews = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=45c5ec7648674ebca8acde3df46171ff"
let businessNews = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=45c5ec7648674ebca8acde3df46171ff"
let sportsNews = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=45c5ec7648674ebca8acde3df46171ff"
let entertainmentNews = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=45c5ec7648674ebca8acde3df46171ff"
let technologyNews = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=45c5ec7648674ebca8acde3df46171ff"
let searchNews = "https://newsapi.org/v2/everything?q="
let newsCard = document.getElementById("newsCard")
// console.log(newsCard);
let newsCarousel = document.getElementById("carouselExampleIndicators")







search.addEventListener("click", function () {

    document.getElementById("headMain").innerHTML = ` <h3 id="headMain" class="headline-1">Top ${newsQuery.value} News by <span class="badge bg-secondary ba-clr"> iTechNews</span></h3>`
    let ser1 = fetch(searchNews + newsQuery.value + "&apiKey=" + apiKey)
    ser1.then((response) => {
        return response.json()
    }).then((response) => {
        AllData = response.articles;
        console.log(response.articles)
        let newsHtml = ``
        for (let news = 0; news < 20; news++) {
            newsHtml += `
             <div class="card mb-3 shadow">
             <div class="row g-0">
                 <div class="col-md-4 main-img">
                 
                 <a href="${AllData[news].url}">
                 <img src="${AllData[news].urlToImage}" class="img-fluid rounded-start" alt="...">
                 </a>
        
                 </div>
                 <div class="col-md-8">
                     <div class="card-body">
                     <a href="${AllData[news].url}" target="_blank" class="card-title"> ${AllData[news].title}</a>
                         <p class="card-text">${AllData[news].author}</p>
                         <p class="card-text desc-2">${AllData[news].description}</p>
                         <a href="${AllData[news].url}" target="_blank" class="btn btn-primary"> Read more </a>
                         <p class="card-text"><small class="text-muted">${AllData[news].publishedAt}"</small></p>
     
                     </div>
                 </div>
             </div>
         </div> 
         `
        }
        newsCard.innerHTML = newsHtml

    })
})


function displayNews() {

    let res1 = fetch(url)
    res1.then((response) => {
        return response.json()
    }).then((response) => {
        AllData = response.articles;
        // console.log(response.articles)
        // console.log(response.status)
        // console.log(response.ok)

        let newsHtml = ``
        for (let news in AllData) {
            newsHtml += `
        <div class="card mb-3 shadow">
        <div class="row g-0">
            <div class="col-md-4 main-img">
            <div class="img-div">
            <a href="${AllData[news].url}">
                <img src="${AllData[news].urlToImage}" class="img-fluid rounded-start" alt="...">
                </a>
            </div>
           </div>
            <div class="col-md-8">
                <div class="card-body">
    
                <a href="${AllData[news].url}" target="_blank" class="card-title"> ${AllData[news].title}</a>
                    <p class="card-text auth-2">${AllData[news].author}</p>
                    <p class="card-text desc-2">${AllData[news].description}</p>
                    <a href="${AllData[news].url}" target="_blank" class="btn btn-primary btn-2"> Read more </a>
                    <p class="card-text"><small class="text-muted">${AllData[news].publishedAt}"</small></p>
                </div>
            </div>
        </div>
    </div> 
    `
        }
        newsCard.innerHTML = newsHtml
    })

}
displayNews()




//Left SideBar 
let left_side = document.getElementById("leftCard")
let url_left = "https://newsapi.org/v2/everything?q=social-life&apiKey=45c5ec7648674ebca8acde3df46171ff"

let leftBar = fetch(url_left)
leftBar.then((response) => {
    return response.json()
}).then((response) => {
    AllData = response.articles;
    let newsHtml = ``
    for (let news = 0; news < 30; news++) {
        newsHtml += `
        <div class="card card-1 mb-3 shadow">
        <div class="row g-0">
            <div class="col-md-4 mainl-img">
            <div class= "img-div">
            <a href="${AllData[news].url}">
                <img src="${AllData[news].urlToImage}" class="img-fluid rounded-start" alt="...">
                </a>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card-body">       
                    <a href="${AllData[news].url}" target="_blank" class="desc-2"> ${AllData[news].title}</a>
                </div>
            </div>
        </div>
    </div> 
    `
    }
    left_side.innerHTML = newsHtml

})

//Right SideBar 
let right_side = document.getElementById("rightCard")
let url_right = "https://newsapi.org/v2/everything?q=health&apiKey=45c5ec7648674ebca8acde3df46171ff"

let rightBar = fetch(url_right)
rightBar.then((response) => {
    return response.json()
}).then((response) => {
    AllData = response.articles;
    let newsHtml = ``
    for (let news = 0; news < 20; news++) {
        newsHtml += `
        <div class="card mb-3 shadow">
        <div class="row g-0">
        <div class="card-body">
        <a href="${AllData[news].url}" target="_blank" class="card-title">
        <img src="${AllData[news].urlToImage}" class="card-img-top" alt="..."> ${AllData[news].title}</a>
        </div>
           
        </div>
    </div> 
    `
    }
    right_side.innerHTML = newsHtml

})

//tool tips
$(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
});