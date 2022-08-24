const create = document.getElementById("create");
const done = document.getElementById("done");
const close = document.getElementsByClassName("x-color")[0];
const wrap = document.getElementById("wrap");
const data=[];
const container = document.getElementById("container")
create.addEventListener("click", ()=>{
    wrap.style.display="block"
})

close.addEventListener("click", ()=>{
    wrap.style.display="none"
})
done.addEventListener("click", (e)=>{
    e.preventDefault();
    let moviename = document.getElementById("moviename").value;
    // console.log(moviename)
    let actors = document.getElementById("Actors").value;
    // console.log(actors);
    let trailer = document.getElementById("trailer").value;
    // console.log(trailer);
    let imdb = document.getElementById("imdb").value;
    // console.log(imdb);
    let category = document.getElementById("category").value;
    // console.log(category);

    let obj={
        Moviename:moviename,
        Actors:actors,
        Trailer:trailer,
        IMDB:imdb,
        Category:category
    }
    data.push(obj)
    // console.log(data)
    wrap.style.display="none"
    show(data)
})

function show(newdata){
container.innerHTML=null
    newdata.map((d)=>{
        const newMovie=document.createElement("div");
        newMovie.classList.add("movie")
        newMovie.innerHTML=`<i class="fa-solid fa-x delete"></i>
                            <div class="hw">${d.Trailer}</div>
                            <h4><span class="descrip">Movie:</span><span class="ans">${d.Moviename}</span></h4>
                            <h4><span class="descrip">Actors:</span><span class="ans">${d.Actors}</span></h4>
                            <h4><span class="descrip">rating:</span><span class="ans">${d.IMDB}</span></h4>
                            <h4><span class="descrip">category:</span><span class="ans">${d.Category}</span></h4>`
                            container.appendChild(newMovie)
        
    })
}
const del = document.getElementsByClassName("delete")
const del1=Array.from(del)
del1.map((element)=>{
    element.addEventListener("click",(e)=>{
        element.parentElement.remove()
    })
})
const sort = document.getElementById("sort")
sort.addEventListener("click", ()=>{
   let sortedata = data.sort(function(a,b){return a.IMDB-b.IMDB})
   console.log(sortedata);
   show(sortedata)
})
const action = document.getElementById("action")
action.addEventListener("click", ()=>{
    let filterdata = data.filter((e)=>{return e.Category==="action"})
    // console.log(filterdata);
    show(filterdata)
})
const comedy=document.getElementById("comedy")
comedy.addEventListener("click", ()=>{
    let fdata = data.filter((e)=>{return e.Category==="comedy"})
    show(fdata)
})
const thriller = document.getElementById("thriller")
thriller.addEventListener("click", ()=>{
    let fdata1 = data.filter((e)=>{return e.Category==="thriller"})
    show(fdata1)
})
