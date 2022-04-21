function $(param){
    return document.getElementById(param);
}

function elkuld(){
    const rendszam = $("rendszam").value;
    /*fetch(`/auto/${rendszam}`, {
        method: "GET"
      })
    */
      location.replace(`/auto/${rendszam}`);
}

function init(){
    //Eseménykezelőkre feliratkozások
    $('btnLekerdezAuto').addEventListener('click', elkuld, false);
}

window.addEventListener('load',init, false);
