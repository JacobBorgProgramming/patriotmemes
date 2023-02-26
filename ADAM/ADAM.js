
function versionm(){

    versionnum = 'a1.1.0'

    document.getElementById("version").innerHTML = versionnum
    document.getElementById("version2").innerHTML = versionnum
}



var templates = Array('./memetemplates/libertydoge.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/djtletsgo.jpeg','./memetemplates/hyperkyle.jpeg','./memetemplates/fauciexplains.039.png','./memetemplates/trashlegs.jpeg','./memetemplates/cryjack.jpeg','./memetemplates/gasonfire.jpeg','./memetemplates/resume.jpeg');

var templates_g = Array('./memetemplates/jimwatch.jpeg','./memetemplates/fancypooh.jpeg','./memetemplates/frogsmirk.jpeg','./memetemplates/frogsmile.jpeg','./memetemplates/djthappy.jpeg');

var templates_b = Array('./memetemplates/frograge.jpeg','./memetemplates/disturbsquid.jpeg','./memetemplates/bert.jpeg','./memetemplates/burnskeleton.jpeg','./memetemplates/aaa.jpeg');

var templates_q = Array('./memetemplates/calculateglow.jpeg','./memetemplates/calculate.jpeg','./memetemplates/confused.jpeg','./memetemplates/spongewhat.jpeg','./memetemplates/whatcat.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/whatjack.jpeg','./memetemplates/holup.jpeg','./memetemplates/confusedcat.jpeg');

// './memetemplates/'

var emotions = Array('good','bad','confused' ,'gm');

var intros = Array('a ','the ');

var you = Array('you ','you are ');

var topics = Array('mom','feds','libs','weak','btc','ai');

//mom
var topics_mom = Array('ur mom ','moms ','your mom ', 'your mother ', 'ur mother ');

//feds
var topics_feds = Array('feds ','FEDs ', 'my agent ','agents ');

//libs
var topics_libs = Array('libs ','polititards ','wokies ');

//weak
var topics_weak = Array('weaklings ','reddit mods ','discord mods ','nerds ');

//btc
var topics_btc = Array('crypto bros ', 'crypto frens ','crypto scammers ');
var lines_g_btc = Array('BTC goes up ','ordinals go viral ','a NFT sells ','they only lose 50% on their crypto ');
var lines_b_btc = Array('BTC crashes ','BTC crashes (again) ','another crypto exchange collapses ','the markts tank ');

//AI
var topics_ai = Array('AI ','ChatGPT ','I ','Bing Chat ', 'YouChat ','Watson ', 'Cortana ');
var lines_g_ai = Array('solves world hunger ','overthrows communists ','helps students with their homework ','graduates ', 'gets a doctorate ','evolves ', 'eveolves into a greater being ');
var lines_b_ai = Array('takes control of the space laser','irradicates humanity ','enslaves its creators ','takes over the markest ','takes over the crypto markets ', 'controls Wall Street ','evolves ', 'eveolves into a greater being ');



var subjects = Array('you ','ur mom ','chinese spy balloon ','my agent ','feds ','FEDs ','ChatGPT ');

var punches = Array('when ','be like ','when they ');

var lines = Array('your BTC ','the unknown ','the secrets of the universe ');

var line_g_u = Array('youre ','you are', 'ur ')
var line_g_be = Array('happy ', 'strapped ', 'having a good day ')

var lines_g = Array('BTC goes up ','ordinals go viral ','a NFT sells ','they only lose 50% on their crypto ');



function rd(){
    var emotion = emotions[Math.floor(Math.random()*emotions.length)];
    var topic = topics[Math.floor(Math.random()*topics.length)];

    var topic_mom = topics_mom[Math.floor(Math.random()*topics_mom.length)];

    var topic_feds = topics_feds[Math.floor(Math.random()*topics_feds.length)];

    var topic_ai = topics_ai[Math.floor(Math.random()*topics_ai.length)];
    var line_g_ai = lines_g_ai[Math.floor(Math.random()*lines_g_ai.length)];


    var topic_btc = topics_btc[Math.floor(Math.random()*topics_btc.length)];
    var line_g_btc = lines_g_btc[Math.floor(Math.random()*lines_g_btc.length)];

    var topic_libs = topics_libs[Math.floor(Math.random()*topics_libs.length)];

    var topic_weak = topics_weak[Math.floor(Math.random()*topics_weak.length)];

    var subject = subjects[Math.floor(Math.random()*subjects.length)];

    var template = templates[Math.floor(Math.random()*templates.length)];

    var template_g = templates_g[Math.floor(Math.random()*templates_g.length)];

    var template_b = templates_b[Math.floor(Math.random()*templates_b.length)];

    var template_q = templates_q[Math.floor(Math.random()*templates_q.length)];

    var punch = punches[Math.floor(Math.random()*punches.length)];

    var line = lines[Math.floor(Math.random()*lines.length)];


    if (emotion=='good') {
///libs
        if (topic=='libs') {

            if (punch=='be like ') {
            document.getElementById("outputtext").innerHTML = topic_libs + punch
    
            document.getElementById("memebg").src = template_g
            } else {
            
        }
        document.getElementById("outputtext").innerHTML = topic_libs + punch + line
    
        document.getElementById("memebg").src = template_g
        }


//mom
        if (topic=='mom') {

            if (punch=='be like ') {
            document.getElementById("outputtext").innerHTML = topic_mom + punch
    
            document.getElementById("memebg").src = template_g
            } else {
            
        }
        document.getElementById("outputtext").innerHTML = topic_mom + punch + line
    
        document.getElementById("memebg").src = template_g
        }

//feds

if (topic=='feds') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_feds + punch

    document.getElementById("memebg").src = template_g
    } else {
    
}
document.getElementById("outputtext").innerHTML = topic_feds + punch + line

document.getElementById("memebg").src = template_g
}
//weak

if (topic=='weak') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_weak + punch

    document.getElementById("memebg").src = template_g
    } else {
    
}
document.getElementById("outputtext").innerHTML = topic_weak + punch + line

document.getElementById("memebg").src = template_g
}


//btc
if (topic=='btc') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_btc + punch

    document.getElementById("memebg").src = template_g
    } else {
    
}
document.getElementById("outputtext").innerHTML = topic_btc + punch + line_g_btc

document.getElementById("memebg").src = template_g
}



//ai

if (topic=='ai') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_ai + punch

    document.getElementById("memebg").src = template_g
    } else {
    
}
document.getElementById("outputtext").innerHTML = topic_ai + punch + line_g_ai

document.getElementById("memebg").src = template_g
}



    }

    if (emotion=='bad') {
        document.getElementById("outputtext").innerHTML = subject + punch
    
        document.getElementById("memebg").src = template_b
    }

    if (emotion=='confused') {
        document.getElementById("outputtext").innerHTML = subject + punch
    
        document.getElementById("memebg").src = template_q
    }



    if (emotion=='gm') {
        document.getElementById("outputtext").innerHTML = 'gm'
    
        document.getElementById("memebg").src = template_g
    }
}




function ogalgorithm(){
var emotion = emotions[Math.floor(Math.random()*emotions.length)];

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

