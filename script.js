
document.addEventListener("mousemove", e => {
    const glow = document.getElementById("glow")
    if (!glow) return
    glow.style.left = (e.clientX - 200) + "px"
    glow.style.top = (e.clientY - 200) + "px"
})
