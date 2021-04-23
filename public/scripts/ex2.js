function hide(){
   // alert('ciao');
    var elements = document.getElementsByClassName("corner");
    for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].style.display = "block";
        
    }

    
}

function show(){
    var elements = document.getElementsByClassName("corner");
    for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].style.display = "none";
        
    }
}