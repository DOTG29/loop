const imgG = document.getElementById("imgG");
const img =  document.getElementById("img")
let rect = imgG.getBoundingClientRect()


imgG.addEventListener("mousemove",(ev)=>{
    
    let x = ev.clientX - rect.x
    let y = ev.clientY - rect.y
   
    x = x / imgG.offsetWidth * 100 - 50
    y = y / imgG.offsetHeight * 100 - 50
    img.style.transform = `translateX(${-x}%) translateY(${-y}%)`
})