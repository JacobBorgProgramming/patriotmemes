var templates = Array('./memetemplates/libertydoge.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/djtletsgo.jpeg','./memetemplates/hyperkyle.jpeg','./memetemplates/fauciexplains.039.png','./memetemplates/trashlegs.jpeg','./memetemplates/cryjack.jpeg','./memetemplates/gasonfire.jpeg','./memetemplates/resume.jpeg');



var intros = Array('a ','the ');

var you = Array('you ','you are ');

var subjects = Array('you ','ur mom ','chinese spy balloon ','my agent ','feds ','FEDs ','ChatGPT ');

var punches = Array('when ','be like ','when they ');

var lines = Array('your BTC ','the unknown ','the secrets of the universe ','');



function rd(){


var subject = subjects[Math.floor(Math.random()*subjects.length)];

var template = templates[Math.floor(Math.random()*templates.length)];

var punch = punches[Math.floor(Math.random()*punches.length)];

var line = lines[Math.floor(Math.random()*lines.length)];

if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = subject + punch

    document.getElementById("memebg").src = template
} else {
    document.getElementById("outputtext").innerHTML = subject + punch + line

    document.getElementById("memebg").src = template
}


    

}

