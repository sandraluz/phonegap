var menuIsOpen = false;
var pages = null;
var currentPage = "page1";

loadPages = function() {
    pages = {
        page1: document.getElementById("Page-1"),
        page2: document.getElementById("Page-2"),
        page3: document.getElementById("Page-3"),
        page4: document.getElementById("Page-4"),
        page5: document.getElementById("Page-5"),
        page6: document.getElementById("Page-6")
    }
}

function showMsg(mensaje, titulo, textbutton) {
    if(titulo==undefined){
        titulo = 'Titulo';
    }
    if(textbutton==undefined){
        textbutton = 'De acuerdo';
    }
    navigator.notification.alert(
        mensaje,  // message
        function() { },         // callback
        titulo,            // title
        textbutton                  // buttonName
    );
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
       // alert("Aplicación iniciada");
    },
    // evento disparado cuando todo el HTML ha sido cargado
    contentLoaded: function() {
        loadPages();
        FastClick.attach(document.body);
    },
    backButton: function() {
         // navigator.app.exitApp()
    },
    pause: function (){
        //console.log("events.pause");
    }
    /*, 
    onBatteryStatus function(info){
         alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
        showMsg("Level: " + info.level + " isPlugged: " + info.isPlugged,
                'Battery Status',
                'De acuerdo');
    }*/
    
}

// listener evento de dispositivo listo
document.addEventListener('deviceready', events.deviceReady, false);
// listener de contenido DOM listo
document.addEventListener('DOMContentLoaded', events.contentLoaded, false);

document.addEventListener('backbutton', events.backButton, false);

document.addEventListener('pause', events.pause, false);

//document.addEventListener("batterystatus", events.onBatteryStatus, false);
//window.addEventListener("batterystatus", events.onBatteryStatus, false);


// función click en menú
function menuButtonClick() {
    //console.log("menuButtonClick menuIsOpen:"+menuIsOpen)
    if(menuIsOpen) {
        
       // console.log(pages[currentPage]);
        
        pages[currentPage].className = "body transition center";
        menuIsOpen = false;
       // console.log("pasa a auqi");
    } else {
       // console.log(pages[currentPage]);
        pages[currentPage].className = "body transition right";
        menuIsOpen = true;
       // console.log("pasa a auq 2i");
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


function showAlert() {
    navigator.notification.alert(
        'Esto es una alerta nativa!',  // message
        function() {
            
        },         // callback
        'Titulo',            // title
        'De acuerdo'                  // buttonName
    );
}



function showNoNative() {
    alert("Esta es una alerta desde JavaScript");
}

function showGPS() {
    navigator.geolocation.getCurrentPosition(function(position ) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    }, function() {
        
    });
}

function takePhoto() {
    console.log("Entramos en la función de tomar foto");
    navigator.camera.getPicture(function(imageData) {
        alert(imageData);
        document.getElementById("imagen").src = imageData;
    }, function(message) {
        alert('Failed because: ' + message);
    }, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    showMsg('Tipo de conexion: ' + states[networkState], 'Tipo de conexion');
    //alert('Tipo de conexion: ' + states[networkState]);
    
}
/*
function estadoBateria(){
    batterystatus()
}
*/

var options = {
  date: new Date(),
  mode: 'date'
};
function fecha(){
    datePicker.show(options, function(date){
      alert("date result " + date);  
    });
}