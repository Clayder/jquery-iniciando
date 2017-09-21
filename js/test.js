$(document).ready(function(){
    $('#titulo').html('Jquery').css('color', 'red');
    $('#desc').html('paragrafo');

    $('#corButton').click(function(){
        $(this).css('color', '#00ff00');
    });

    $('#escParagrafo').click(function(){
        $('#escParagrafo20').hide();
    });
});