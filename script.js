const create = document.getElementById("create");
const done = document.getElementById("done")
const close = document.getElementsByClassName("x-color")[0];
const wrap = document.getElementById("wrap");

const container = document.getElementById("container")
create.addEventListener("click", ()=>{
    wrap.style.display="block"
})

close.addEventListener("click", ()=>{
    wrap.style.display="none"
})
done.addEventListener("click", (e)=>{
    e.preventDefault();
    setTimeout(()=>{trailer.value="", moviename.value="", imdb.value="", Actors.value="", category.value=""}, 1000)
    wrap.style.display="none"
    let newMovie = document.createElement("div")
    newMovie.classList.add("movie")
    newMovie.innerHTML=`<i class="fa-solid fa-x delete"></i>
    <div class="hw">${trailer.value}</div>
    <h4><span class="descrip">Movie Name: </span><span class="ans">${moviename.value}</span>
    <h4><span class="descrip">Actors: </span><span class="ans">${Actors.value}</span>
    <h4><span class="descrip">Category: </span><span class="ans">${category.value}</span>
    <h4><span class="descrip">IMDB rating: </span><span class="ans">${imdb.value}</span>`
    container.append(newMovie)
    const del = document.getElementsByClassName("delete")
    const DEL=Array.from(del)
    DEL.map((Element)=>{
        Element.addEventListener("click",()=>{
            Element.parentElement.remove()
        })
    })
    const iframe = document.getElementsByTagName("iframe")
    const IFRAME = Array.from(iframe)
    IFRAME.map((e)=>{
        e.height="250"
        e.width="300"
        console.log(e);
    })
})

