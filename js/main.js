$(document).ready(function(){
    $('.small_img').click(function(){
        let img = $(this).attr('src');
        // alert(img);
        $('#big_img').attr('src', img);
    });

    var val;
    $('.subtract').click(function(){
        let val = $(this).parent().find('#value').text();
        
        isNaN(val) ? 0: val;
        
        val < 1 ? (val=1) : "";
        val--;
        $(this).parent().find('#value').text(val);
        // alert($(this).parent().find('#value').text());
    });

    $('.add').click(function(){
        let val = $(this).parent().find('#value').text();
        val++;
        if(isNaN(val) ? 0: val){
            $(this).parent().find('#value').text(val)
        }
        // alert($(this).parent().find('#value').text());
    });

    $('.carts_remove').click(function(){
        $(this).parents('.carts_box').hide();
    });
});