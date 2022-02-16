function navbar(){
    return `  <div id="navbar">
    <h3> <a href="/">Home</a></h3>

    <h3>
    <input type="text" placeholder="Search By name" id="search" >
    <button id = "btn">Search</button>
</h3>
  
    <div id="options">
     <h3><a href="/el.html">Latest</a></h3>
     <h3><a href="/jl.html">Meal</a></h3>
     <h3><a href="">Sign In</a></h3>
     <h3><a href="">Sign Up</a></h3>
    </div>
  </div>
`
}

export default navbar