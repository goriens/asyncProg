let i = 0;
let images = [];
let time = 3000;

images[0] = "https://pluralsight.imgix.net/course-images/movie-poster-concepts-photoshop-1763-v1.jpg";
images[1] = "https://www.looper.com/img/gallery/why-do-movie-posters-reverse-names/intro-1582575430.jpg";
images[2] = "https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/01061016/7315945.jpg?d=360x540&q=50";

function changeImg(){
    document.slide.src= images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg;


//-------------------------data-----------------------------------
let moviesData = JSON.parse(localStorage.getItem("movies"));
console.log(moviesData);
let movieArr = [];
displayData(moviesData);

function displayData(moviesData){
    document.querySelector("#movies").innerHTML = "";
    moviesData.map(function (data){
        let div = document.createElement("div");

        let h3 = document.createElement("h2")
        h3.textContent = data.name;

        let p1 = document.createElement("p")
        p1.textContent = `(${data.date})`;

        let img = document.createElement("img");
        img.setAttribute("src",data.poster);

        let p2 = document.createElement("p");
        p2.textContent = `IMDb Rating : ${data.rating}`;

        let strong = document.createElement("strong");
        strong.textContent = `Director - ${data.Directors} `;

        div.append(h3,p1,img, p2, strong);
        document.querySelector("#movies").append(div);
    });
}

function handleRatingSort(){
    let ratings = document.querySelector("#ratingSort").value;
    if(ratings == "sort-lh"){
        moviesData.sort(function(a,b){
            return b.rating - a.rating;
        });
    }
    if(ratings =="sort-hl"){
        moviesData.sort(function(a,b){
            return a.rating - b.rating;
        });
    }
    displayData(moviesData)
}

  


