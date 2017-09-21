$(document).ready(function(){
    $('#titulo').html('Jquery').css('color', 'red');
    $('#desc').html('paragrafo');

    $('#corButton').click(function(){
        $(this).css('color', '#00ff00');
    });

    $('#escParagrafo').click(function(){
        $('#escParagrafo20').hide();
    });

    $('#click').click(function(){
        $(this).html('OK');
    });

    // click duplo
    $('#dblclick').dblclick(function(){
        $(this).html('OK');
    });

    // passar o cursor 
    $('#mouseenter').mouseenter(function(){
        $(this).html('OK');
    });

    // retirar o cursor 
    $('#mouseleave').mouseleave(function(){
        $(this).html('OK');
    });

    $('#keypress').keypress(function(){
        $("#eventKey").html('keypress -> ' + $(this).val());
    });

    $('#keydown').keydown(function(){
        $("#eventKey").html('keydown -> ' + $(this).val());
    });

    $('#keyup').keyup(function(){
        $("#eventKey").html('keyup -> ' + $(this).val());
    });


});