//Entry creator for Developer Designated Database

function generate(){
    var devitom = document.getElementById("meters").value

    document.getElementById("var1").innerHTML = (Math.round(devitom/1.47 * 100) / 100).toFixed(2) + " Long Dev1t0s (Ld0)"





    var devitof = document.getElementById("feet").value
    document.getElementById("var2").innerHTML = (Math.round(devitof*12/59 * 100) / 100).toFixed(2) + " Long Dev1t0s (Ld0)"





    var devitoi = document.getElementById("inches").value
    vari = (Math.round(devitoi/59 * 100) / 100).toFixed(2)


    document.getElementById("var3").innerHTML = (Math.round(devitoi/59 * 100) / 100).toFixed(2) + " Long Dev1t0s (Ld0)"




   /* document.getElementById("var2").innerHTML = (Math.round(devitof*1.2/4.93 * 100) / 100).toFixed(2) + " Long Dev1t0s (Ld0)" */
    
    var devitom = document.getElementById("mass").value

    document.getElementById("var4").innerHTML = (Math.round(devitom/56.7 * 100) / 100).toFixed(2) + " Mass Dev1t0s (Md0)"




    var devitoo = document.getElementById("weighto").value

    document.getElementById("var5").innerHTML = (Math.round(devitoo/2 * 100) / 100).toFixed(2) + " Mass Dev1t0s (Md0)"




    var devitomph = document.getElementById("mph").value

    document.getElementById("var6").innerHTML = (Math.round(1073.90/devitomph * 100) / 100).toFixed(2) + " Long Dev1t0s Per Hour (DPH) " + (Math.round(1073.90/devitomph * 100) / 100000).toFixed(2) + " Kilo Long Dev1t0s Per Hour (KDPH)"
    



    var devitokph = document.getElementById("kph").value

    document.getElementById("var7").innerHTML = (Math.round(680.27/devitokph * 100) / 100).toFixed(2) + " Long Dev1t0s Per Hour (DPH) " + (Math.round(680.27/devitokph * 100) / 100000).toFixed(2) + " Kilo Long Dev1t0s Per Hour (KDPH)" 
    



}

/* 
Mass is based on the average weight of a chicken egg in the USA.
*/