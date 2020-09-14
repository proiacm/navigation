// console.log("testing")

document.getElementById("menu").addEventListener("click", handleMenuClick)

function handleMenuClick() {
    let nav = document.getElementById("nav")
        if (nav.style.display === "none") {
            nav.style.display = "block"
        } else {
            nav.style.display = "none"
        }
}