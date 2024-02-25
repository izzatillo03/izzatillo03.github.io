const close = document.getElementById("close");
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");


close.addEventListener("click", () => {
    nav.classList.remove("active");
})

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    })
}

