function scrl(id) {

    var pos = document.getElementById(id).offsetTop;
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if('scrollBehavior' in document.documentElement.style) {
        window.scroll({
            top : pos,
            left : 0,
            behavior : 'smooth'
        });
    } else {
        window.scroll(0, pos);
    }

    if(w < 811) closemnav();
}

function opennav() {

    var elem = document.getElementById('ccnav');
    elem.style.transform = "translate(0, 0)";
}

function closenav() {

    var elem = document.getElementById('ccnav');
    elem.style.transform = "translate(-90%, 0)";
}

function openmnav() {
    var elem = document.getElementById('mnav');
    elem.style.display = "block";
}

function closemnav() {
    var elem = document.getElementById('mnav');
    elem.style.display = "none";
}
