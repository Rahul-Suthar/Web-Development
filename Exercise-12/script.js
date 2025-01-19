
document.querySelectorAll(".box").forEach(e=>{
    let a = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let c = Math.floor(Math.random() * 256)

    e.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
})

// to generate random num between min and max
// Math.floor(Math.random() * (max-min) + min)