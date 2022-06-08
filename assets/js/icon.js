function time(){
    const d = new Date();
    let hour = d.getHours();

    if (hour < 12) {
        document.getElementById("icon").src = "Potato.png"
    } else {
        document.getElementById("icon").src = "Hamburger.png"
    }
}