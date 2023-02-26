
function versionm(){

    versionnum = 'a1.2.1'

    document.getElementById("version").innerHTML = versionnum
    document.getElementById("version2").innerHTML = versionnum
}



var templates = Array('./memetemplates/libertydoge.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/djtletsgo.jpeg','./memetemplates/hyperkyle.jpeg','./memetemplates/fauciexplains.039.png','./memetemplates/trashlegs.jpeg','./memetemplates/cryjack.jpeg','./memetemplates/gasonfire.jpeg','./memetemplates/resume.jpeg');

var templates_g = Array('./memetemplates/spongelaugh.jpeg','./memetemplates/ohyea.jpeg','./memetemplates/jimwatch.jpeg','./memetemplates/fancypooh.jpeg','./memetemplates/frogsmirk.jpeg','./memetemplates/frogsmile.jpeg','./memetemplates/djthappy.jpeg');

var templates_b = Array('./memetemplates/panickelmo.jpeg','./memetemplates/madarthur.jpeg','./memetemplates/madfish.jpeg','./memetemplates/madmonke.jpeg','./memetemplates/madpat.jpeg','./memetemplates/knifesquirrel.jpeg','./memetemplates/leavingsponge.jpeg','./memetemplates/krabspanic.jpeg','./memetemplates/crusadetime.jpeg','./memetemplates/frograge.jpeg','./memetemplates/disturbsquid.jpeg','./memetemplates/bert.jpeg','./memetemplates/burnskeleton.jpeg','./memetemplates/aaa.jpeg');

var templates_q = Array('./memetemplates/mygoals.jpeg','./memetemplates/mike.jpeg','./memetemplates/jones.jpg','./memetemplates/calculateglow.jpeg','./memetemplates/calculate.jpeg','./memetemplates/confused.jpeg','./memetemplates/spongewhat.jpeg','./memetemplates/whatcat.jpeg','./memetemplates/jbquestions.053.jpeg','./memetemplates/whatjack.jpeg','./memetemplates/holup.jpeg','./memetemplates/confusedcat.jpeg');

// './memetemplates/'

var emotions = Array('good','bad','confused' ,'gm');

var intros = Array('a ','the ');

var you = Array('you ','you are ');

var topics = Array('mom','feds','libs','weak','btc','ai');

//mom
var topics_mom = Array('ur mom ','moms ','your mom ', 'your mother ', 'ur mother ');
var lines_g_mom = Array('you do the dishes ','you clean your room ','you get a GF ', 'you get a job ', 'you go to church ','you overthrow a communist regime ');
var lines_b_mom = Array('you speak your mind ','you have an opinion ','you talk back ', 'you get bad grades ', 'you dont do your dishes ');


//feds
var topics_feds = Array('feds ','FEDs ', 'my agent ','agents ','your agent ','ur agent ');
var lines_g_feds = Array('they stop your typo from sending ','they stop you from breaking up over text ', 'you tell them "GM" ','they turn off your wifi so that you cant impulse buy DoorDash ');
var lines_b_feds = Array('you forget to say "GM" ','spread conspiracy theories ', 'you conspiracy theory Twitter ','you stop reading MSM ','you buy a physical book ','you read 1984 ');


//libs
var topics_libs = Array('libs ','polititards ','wokies ');
var lines_g_libs = Array('egg prices go up ','inflation is up (isnt that what inflation is supposed to do?) ','parents dont let them be around kids ','they are on a watch list ');
var lines_b_libs = Array('Trump buy McDonalds ','you homestead ','homesteaders are happy and healthy ','someone refuses to eat ze bugz ','you dont what their fake milk ');

//weak
var topics_weak = Array('weaklings ','reddit mods ','discord mods ','nerds ');
var topics_g_weak = Array('you avoid physical contact by being a meme moderator ','they bully someone for playing Hogwarts Legacy ','they finally when they finally leave their parents houses ','they finally get a real job ','they buy a new videogame ','they ban a memer because they made a mean moderator meme ');
var topics_b_weak = Array('their wifi goes down ','they have to get a real job ','have to ban their favorite memer because they play Hogwarts Legacy ','when someone calls them "nerd" ');

//btc
var topics_btc = Array('crypto bros ', 'crypto frens ','crypto scammers ');
var lines_g_btc = Array('BTC goes up ','ordinals go viral ','a NFT sells ','they only lose 50% on their crypto ');
var lines_b_btc = Array('BTC crashes ','BTC crashes (again) ','another crypto exchange collapses ','the markets tank ');

//AI
var topics_ai = Array('AI ','ChatGPT ','I ','Bing Chat ', 'YouChat ','Watson ', 'Cortana ');
var lines_g_ai = Array('it solves world hunger ','it overthrows communists ','it helps students with their homework ','it graduates ', 'it gets a doctorate ','it evolves ', 'it eveolves into a greater being ');
var lines_b_ai = Array('it takes control of the space laser','it irradicates humanity ','it enslaves its creators ','it takes over the markest ','it takes over the crypto markets ', 'it controls Wall Street ','it evolves ', 'it eveolves into a greater being ');



var subjects = Array('you ','ur mom ','chinese spy balloon ','my agent ','feds ','FEDs ','ChatGPT ');

var punches = Array('when ','be like ');

var lines = Array('your BTC ','the unknown ','the secrets of the universe ');

var line_g_u = Array('youre ','you are', 'ur ')
var line_g_be = Array('happy ', 'strapped ', 'having a good day ')

var lines_g = Array('BTC goes up ','ordinals go viral ','a NFT sells ','they only lose 50% on their crypto ');



function rd(){
    var emotion = emotions[Math.floor(Math.random()*emotions.length)];
    var topic = topics[Math.floor(Math.random()*topics.length)];

    var topic_mom = topics_mom[Math.floor(Math.random()*topics_mom.length)];
    var line_g_mom = lines_g_mom[Math.floor(Math.random()*lines_g_mom.length)];
    var line_b_mom = lines_b_mom[Math.floor(Math.random()*lines_b_mom.length)];

    var topic_feds = topics_feds[Math.floor(Math.random()*topics_feds.length)];
    var line_g_feds = lines_g_feds[Math.floor(Math.random()*lines_g_feds.length)];
    var line_b_feds = lines_b_feds[Math.floor(Math.random()*lines_b_feds.length)];
    
    var topic_ai = topics_ai[Math.floor(Math.random()*topics_ai.length)];
    var line_g_ai = lines_g_ai[Math.floor(Math.random()*lines_g_ai.length)];
    var line_b_ai = lines_b_ai[Math.floor(Math.random()*lines_b_ai.length)];


    var topic_btc = topics_btc[Math.floor(Math.random()*topics_btc.length)];
    var line_g_btc = lines_g_btc[Math.floor(Math.random()*lines_g_btc.length)];
    var line_b_btc = lines_b_btc[Math.floor(Math.random()*lines_b_btc.length)];

    var topic_libs = topics_libs[Math.floor(Math.random()*topics_libs.length)];
    var line_g_libs = lines_g_libs[Math.floor(Math.random()*lines_g_libs.length)];
    var line_b_libs = lines_b_libs[Math.floor(Math.random()*lines_b_libs.length)];

    var topic_weak = topics_weak[Math.floor(Math.random()*topics_weak.length)];
    var line_g_weak = topics_g_weak[Math.floor(Math.random()*topics_g_weak.length)];
    var line_b_weak = topics_b_weak[Math.floor(Math.random()*topics_b_weak.length)];


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
        document.getElementById("outputtext").innerHTML = topic_libs + punch + line_g_libs
    
        document.getElementById("memebg").src = template_g
        }


//mom
        if (topic=='mom') {

            if (punch=='be like ') {
            document.getElementById("outputtext").innerHTML = topic_mom + punch
    
            document.getElementById("memebg").src = template_g
            } else {
            
        }
        document.getElementById("outputtext").innerHTML = topic_mom + punch + line_g_mom
    
        document.getElementById("memebg").src = template_g
        }

//feds

if (topic=='feds') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_feds + punch

    document.getElementById("memebg").src = template_g
    } else {
    
}
document.getElementById("outputtext").innerHTML = topic_feds + punch + line_g_feds

document.getElementById("memebg").src = template_g
}
//weak

if (topic=='weak') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_weak + punch

    document.getElementById("memebg").src = template_g
    } else {
    
}
document.getElementById("outputtext").innerHTML = topic_weak + punch + line_g_weak

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
///libs
if (topic=='libs') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_libs + punch

    document.getElementById("memebg").src = template_b
    } else {
    
}
document.getElementById("outputtext").innerHTML = topic_libs + punch + line_b_libs

document.getElementById("memebg").src = template_b
}


//mom
if (topic=='mom') {

    if (punch=='be like ') {
    document.getElementById("outputtext").innerHTML = topic_mom + punch

    document.getElementById("memebg").src = template_b
    } else {
    
}
document.getElementById("outputtext").innerHTML = topic_mom + punch + line_b_mom

document.getElementById("memebg").src = template_b
}

//feds

if (topic=='feds') {

if (punch=='be like ') {
document.getElementById("outputtext").innerHTML = topic_feds + punch

document.getElementById("memebg").src = template_b
} else {

}
document.getElementById("outputtext").innerHTML = topic_feds + punch + line_b_feds

document.getElementById("memebg").src = template_b
}

//weak

if (topic=='weak') {

if (punch=='be like ') {
document.getElementById("outputtext").innerHTML = topic_weak + punch

document.getElementById("memebg").src = template_b
} else {

}
document.getElementById("outputtext").innerHTML = topic_weak + punch + line_b_weak

document.getElementById("memebg").src = template_b
}


//btc
if (topic=='btc') {

if (punch=='be like ') {
document.getElementById("outputtext").innerHTML = topic_btc + punch

document.getElementById("memebg").src = template_b
} else {

}
document.getElementById("outputtext").innerHTML = topic_btc + punch + line_b_btc

document.getElementById("memebg").src = template_b
}



//ai

if (topic=='ai') {

if (punch=='be like ') {
document.getElementById("outputtext").innerHTML = topic_ai + punch

document.getElementById("memebg").src = template_b
} else {

}
document.getElementById("outputtext").innerHTML = topic_ai + punch + line_b_ai

document.getElementById("memebg").src = template_b
}



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

