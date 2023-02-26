function smallest_opensans(){


    document.getElementById("output").style = 'font-size: 8pt; font-family: "Open Sans";'
}


function smaller_opensans(){


    document.getElementById("output").style = 'font-size: 12pt; font-family: "Open Sans";'
}
function bigger_opensans(){


    document.getElementById("output").style = 'font-size: 24pt; font-family: "Open Sans";'
}


//

function smallest_literata(){


    document.getElementById("output").style = 'font-size: 8pt; font-family: "Literata";'
}


function smaller_literata(){


    document.getElementById("output").style = 'font-size: 12pt; font-family: "Literata";'
}
function bigger_literata(){


    document.getElementById("output").style = 'font-size: 24pt; font-family: "Literata";'
}

//

function smallest_Nanum(){


    document.getElementById("output").style = 'font-size: 8pt; font-family: "Nanum Gothic ExtraBold";'
}


function smaller_Nanum(){


    document.getElementById("output").style = 'font-size: 12pt; font-family: "Nanum Gothic ExtraBold";'
}
function bigger_Nanum(){


    document.getElementById("output").style = 'font-size: 24pt; font-family: "Nanum Gothic ExtraBold";'
}




function opensans(){

    document.getElementById("output").style = 'font-family: "Open Sans";'
    document.getElementById("textsize").innerHTML = '<button onclick="smallest_opensans()">tiny</button><button onclick="smaller_opensans()">small</button><button onclick="bigger_opensans()">big</button></p>'
}

function literata(){


    document.getElementById("output").style = 'font-family: "Literata;'
    document.getElementById("textsize").innerHTML = '<button onclick="smallest_literata()">tiny</button><button onclick="smaller_literata()">small</button><button onclick="bigger_literata()">big</button></p>'

}

function Nanum_Gothic_ExtraBold(){


    document.getElementById("output").style = 'font-family: "Nanum Gothic ExtraBold";'
    document.getElementById("textsize").innerHTML = '<button onclick="smallest_Nanum()">tiny</button><button onclick="smaller_Nanum()">small</button><button onclick="bigger_Nanum()">big</button></p>'

}