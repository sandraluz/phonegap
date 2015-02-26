var menuIsOpen = false;
var pages = null;
var currentPage = "page1";

loadPages = function() {
    pages = {
        page1: document.getElementById("Page-1"),
        page2: document.getElementById("Page-2"),
        page3: document.getElementById("Page-3"),
        page4: document.getElementById("Page-4"),
        page5: document.getElementById("Page-5")
    }
}

var events = {
    /*
    Eventos de una app en PhoneGap
    --------------------------------
    deviceready
    pause
    resume
    backbutton
    menubutton
    searchbutton
    startcallbutton
    endcallbutton
    volumedownbutton
    volumeupbutton
*/
    deviceReady: function() {
        // console.log("Aplicación iniciada");
    },
    // evento disparado cuando todo el HTML ha sido cargado
    contentLoaded: function() {
        loadPages();
        FastClick.attach(document.body);
    },
    backButton: function() {
         navigator.app.exitApp()
    },
    pause: function (){
        //console.log("events.pause");
    }
}

// listener evento de dispositivo listo
document.addEventListener('deviceready', events.deviceReady, false);
// listener de contenido DOM listo
document.addEventListener('DOMContentLoaded', events.contentLoaded, false);

document.addEventListener('backbutton', events.backButton, false);

document.addEventListener('pause', events.pause, false);

// función click en menú
function menuButtonClick() {
    //console.log("menuButtonClick menuIsOpen:"+menuIsOpen)
    if(menuIsOpen) {
        pages[currentPage].className = "body transition center";
        menuIsOpen = false;
    } else {
        pages[currentPage].className = "body transition right";
        menuIsOpen = true;
    }
}

// función cambiar página
function changePage(pageSelected) {
    //console.log("changePage pageSelected:"+pageSelected + " menuIsOpen:"+menuIsOpen+" currentPage:"+currentPage);
    pages[currentPage].className = "hide";
    
    pages[pageSelected].className = "body right";
    setTimeout(function() {
        pages[pageSelected].className = "body visible transition center";
        currentPage = pageSelected;
        menuIsOpen = false;
    },0);
}