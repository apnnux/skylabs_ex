$price = "€57,35";
$patch = "p1";
$taglia = 40;

function buttclick(id){
    $patch=id;

    searchPicr = new Image(100,100);
    searchPicl = new Image(100,100);
    
    if(id == 'p0'){
        searchPicr.src = "img/patch/void.png";
        searchPicl.src = "img/patch/void.png";
        $price="€50,00";
    }
    if(id == 'p1'){
        searchPicr.src = "img/patch/ad1_right.png";
        searchPicl.src = "img/patch/ad1_left.png";
        $price="€57,35";
    }
    if(id == 'p2'){
        searchPicr.src = "img/patch/ad2_right.png";
        searchPicl.src = "img/patch/ad2_left.png";
        $price="€57,35";
    }
    if(id == 'p3'){
        searchPicr.src = "img/patch/ad3_right.png";
        searchPicl.src = "img/patch/ad3_left.png";
        $price="€57,35";
    }
    $("#r1").attr("src", searchPicr.src);
    $("#l1").attr("src", searchPicl.src);
    $("#r2").attr("src", searchPicl.src);
    $("#l2").attr("src", searchPicr.src);
    $("#price").html($price);

}

function changesel(val){
    $taglia=val;
}

function cartbutt(){
    var $p="";
    if($patch == "p0"){
        $p="Nessuno";
    }
    if($patch == "p1"){
        $p="Melone";
    }
    if($patch == "p2"){
        $p="Fragola";
    }
    if($patch == "p3"){
        $p="Cuore";
    }
    alert("Modello: "+$("#desc").html()+"\nTaglia: "+$taglia+"\nAdesivo: "+$p+"\n\nPrezzo Totale: "+$price+"\n\nAggiunto al carrello")
}