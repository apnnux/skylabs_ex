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





