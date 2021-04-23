function indexing(id){
    if(id == 'ex1_butt'){
        window.open('ex3.html');
    }
    if(id == 'ex2_butt'){
        
    }
    if(id == 'ex3_butt'){
        
    }

    
}


$('.specialDiv').on('click', function(){
    
    var child=$(this).closest('.specialDiv').find('.specialChildren').first()
    console.log(
        child.data('specialvalue')
    )
    if(child.hasClass('active')){
        child.removeClass('active')
    }else{
        child.addClass('active')
    }
    
});



