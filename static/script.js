let con = document.querySelector("#container")
let ico = document.querySelector("i")

con.addEventListener("click", function () {
    ico.style.transform = " translate(-50%, -50%) scale(1)"
    setTimeout(() => {
        ico.style.transform = " translate(-50%, -50%) scale(0)"
    }, 1000);
})

