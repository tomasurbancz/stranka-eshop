function hover(section = "") {
    if(section === "playstation") {
        document.querySelector(":root").style.setProperty('--visibilityps', "visible");
    }
    if(section === "nintendo") {
        document.querySelector(":root").style.setProperty('--visibilitynt', "visible");
    }
    if(section === "xbox") {
        document.querySelector(":root").style.setProperty('--visibilityxb', "visible");
    }
    if(section === "pc") {
        document.querySelector(":root").style.setProperty('--visibilitypc', "visible");
    }
}

function openWebsite(website = "") {
    window.open(website, "_self");
}


function unhover(section = "") {
    if(section === "playstation") {
        document.querySelector(":root").style.setProperty('--visibilityps', "hidden");
    }
    if(section === "nintendo") {
        document.querySelector(":root").style.setProperty('--visibilitynt', "hidden");
    }
    if(section === "xbox") {
        document.querySelector(":root").style.setProperty('--visibilityxb', "hidden");
    }
    if(section === "pc") {
        document.querySelector(":root").style.setProperty('--visibilitypc', "hidden");
    }
    document.querySelector(":root").style.setProperty('--sectionmenu-width', "30%");
}

function resetRecommended(val = 0) {
    switch (val) {
        case 0: {
            document.querySelector(":root").style.setProperty('--recommendedps5', "rgb(255, 255, 255, 0.85)");
            document.querySelector(":root").style.setProperty('--recommendedps5W', "normal");
            document.querySelector(":root").style.setProperty('--recommendedps5S', "19px");
        }
        case 1: {
            document.querySelector(":root").style.setProperty('--recommendedhl', "rgb(255, 255, 255, 0.85)");
            document.querySelector(":root").style.setProperty('--recommendedhlW', "normal");
            document.querySelector(":root").style.setProperty('--recommendedhlS', "19px");
        }
        case 2: {
            document.querySelector(":root").style.setProperty('--recommendedxb', "rgb(255, 255, 255, 0.85)");
            document.querySelector(":root").style.setProperty('--recommendedxbW', "normal");
            document.querySelector(":root").style.setProperty('--recommendedxbS', "19px");
        }
    }
}

var val = 0;

function load() {
    startRecommended();
    calcOffset(); 
}

function calcOffset() {
    var biggest = 0;
    for(var i = 1; i < 6; i++) {
        var height = document.getElementById("of" + i).clientHeight;
        if(height > biggest) biggest = height;
    }
    document.querySelector(":root").style.setProperty('--biggestof', biggest + "px");
    for(var i = 1; i < 6; i++) {
        var height = document.getElementById("of" + i).clientHeight;
        document.querySelector(":root").style.setProperty('--of' + i, (biggest - height) + "px");
    }
}

window.addEventListener('resize', function() {
    calcOffset();
});


function setRecommended(value = -1) {
    val = value;
    changeRecommended();
}

function startRecommended() {
    setInterval(changeRecommended, 2500);
}

function changeRecommended() {
    if(val > 2) val = 0;
    for(var i = 0; i < 3; i++) {
        resetRecommended(i);
    }
    if(val == 0) {
        document.querySelector(":root").style.setProperty('--recommendedps5', "white");
        document.querySelector(":root").style.setProperty('--recommendedps5W', "bold");
        document.querySelector(":root").style.setProperty('--recommendedps5S', "20px");
        document.getElementById("jsrecommended").innerHTML = "<a href='index2.html?search=search+playstation+5+.,.'><img src='images/ps5.webp' alt='' class='recommendedImage'></a><div class='subtitles'><div class='recPS5' id = 'PS5CLICK' onclick=" +"setRecommended" + "(0)" + "><p>PS5 právě v prodeji</p></div><div class='recHL' id = 'HLCLICK' onclick=" + "setRecommended" + "(1)" + "><p>Hogwarts Legacy</p></div><div class='recXB' id = 'XBCLICK' onclick=" + "setRecommended" + "(2)" + "><p>Nová generace xboxu</p></div></div>";
    }
    if(val == 1) {
        document.querySelector(":root").style.setProperty('--recommendedhl', "white");
        document.querySelector(":root").style.setProperty('--recommendedhlW', "bold");
        document.querySelector(":root").style.setProperty('--recommendedhlS', "20px");
        document.getElementById("jsrecommended").innerHTML = "<a href='index2.html?search=search+hogwarts+legacy+.,.'><img src='images/hogwartslegacy.webp' alt='' class='recommendedImage'></a><div class='subtitles'><div class='recPS5' id = 'PS5CLICK' onclick=" +"setRecommended" + "(0)" + "><p>PS5 právě v prodeji</p></div><div class='recHL' id = 'HLCLICK' onclick=" + "setRecommended" + "(1)" + "><p>Hogwarts Legacy</p></div><div class='recXB' id = 'XBCLICK' onclick=" + "setRecommended" + "(2)" + "><p>Nová generace xboxu</p></div></div>";
    }
    if(val == 2) {
        document.querySelector(":root").style.setProperty('--recommendedxb', "white");
        document.querySelector(":root").style.setProperty('--recommendedxbW', "bold");
        document.querySelector(":root").style.setProperty('--recommendedxbS', "20px");
        document.getElementById("jsrecommended").innerHTML = "<a href='index2.html?search=search+xbox+series+.,.'><img src='images/xbox.webp' alt='' class='recommendedImage'></a><div class='subtitles'><div class='recPS5' id = 'PS5CLICK' onclick=" +"setRecommended" + "(0)" + "><p>PS5 právě v prodeji</p></div><div class='recHL' id = 'HLCLICK' onclick=" + "setRecommended" + "(1)" + "><p>Hogwarts Legacy</p></div><div class='recXB' id = 'XBCLICK' onclick=" + "setRecommended" + "(2)" + "><p>Nová generace xboxu</p></div></div>";
    }
    val++;
}