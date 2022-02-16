//API key:  1af5e144
//https://www.omdbapi.com/?apikey=1af5e144&&s=
let container = document.getElementById("container");


async function getMoviesData() {
try{
   let userInput = document.getElementById("movie").value;
    console.log(userInput);
let res = await fetch(`https://www.omdbapi.com/?apikey=1af5e144&&s=${userInput}`)
let data = await res.json();

//  console.log("data:",data);
 const movieslist = data.Search;
    
//  console.log(movieslist);

 displayData(movieslist);
 








// } https://www.themealdb.com/api/json/v1/1/search.php?s= 


/*
      Search: Array(10)
0:
   Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
   Title: "The Avengers"
   Type: "movie"
   Year: "2012"
   imdbID: "tt0848228"
/*/

}catch (err){
   console.log("wrong:", err) 
noMovie();
function noMovie(){
   let div = document.createElement("div")
   let img = document.createElement(`img`)
   img.src = "https://media2.giphy.com/media/MZ9Nwvdt5FJJ0yGEzF/giphy.gif?cid=ecf05e47fm9y3qn6g6q329c0le0q663ksezznishyj58z3nr&rid=giphy.gif&ct=g"
   div.append(img);
   document.querySelector("#container").append(div)

}
}
}

// getMoviesData()



 function displayData(movieslist) {
     container.innerHTML = "";

    movieslist.map(function(el) {

       
       let div = document.createElement("div")
       let rat_tag = document.createElement("p");
      let rating= Math.random()*10;
      rating = rating.toFixed(1);

let img = document.createElement(`img`)
      img.src = el.Poster;

        let p1 = document.createElement(`p`)
        p1.innerHTML = el.Title;

        let reldate = document.createElement(`p`)
        reldate.innerHTML ="Year:-"+ el.Year;

        if(rating>8.5){
           rat_tag.innerHTML = "Rating:-"+rating+" "+"Recommended"
        }
        else{
           rat_tag.innerHTML= "Rating"+ rating;
        }
      

       div.append(img,p1,reldate,rat_tag);

      document.querySelector("#container").append(div)


    });

 }

