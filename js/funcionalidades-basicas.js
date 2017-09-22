$(document).ready(function(){
    
    // muda a cor do titulo
    $('#titulo').html('Jquery').css('color', 'red');
    
    // printa paragravo 
    $('#desc').html('paragrafo');

    // modifica a cor do button ao clicar 
    $('#corButton').click(function(){
        $(this).css('color', '#00ff00');
    });

    // esconde o paragrafo
    $('#escParagrafo').click(function(){
        $('#escParagrafo20').hide();
    });

    /* ############### Ações do mouse ###################### */

    // modifica o conteúdo do button
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

    /* ####################################################### */

    /* ############### Ações do teclado ###################### */
    $('#keypress').keypress(function(){
        $("#eventKey").html('keypress -> ' + $(this).val());
    });
    $('#keydown').keydown(function(){
        $("#eventKey").html('keydown -> ' + $(this).val());
    });
    $('#keyup').keyup(function(){
        $("#eventKey").html('keyup -> ' + $(this).val());
    });
    /* ######################################################## */


    $("#removeClass").hide();
    // adiciona class
    $("#addClass").click(function(){
        $(this).addClass("btn btn-info btn-large");
        $("#removeClass").show();
    });

    // remove class
    $("#removeClass").click(function(){
        $("#addClass").removeClass("btn btn-info btn-large");
        $("#removeClass").hide();
    });

    // inserir paragragro abaixo
    var qtdPara = 0;
    $("#addParagrafo").click(function(){
        $("#paragrafo").append("<p id='para'"+qtdPara+"> paragrafo "+qtdPara+" </p>");
        qtdPara++;
    });

    // inserir paragragro acima
    $("#addParagrafoAc").click(function(){
        $("#paragrafo").prepend("<p id='para'"+qtdPara+"> paragrafo "+qtdPara+" </p>");
        qtdPara++;
    });

    /* ############# Animação ######################################### */

    // animação 
    $("#animateBtn").click(function(){
        $("#testeAnimacao").animate({
            width: "100%",
        }, 2000, function(){
            // quando finalizar a animação 
            $("#testeAnimacao").css("background-color", "#00ff00");
            $("#testeAnimacao").html("Animação finalizada");
        });
    });

    //slide down
    $('#slideDown').click(function(){
        $("#testeAnimacao").slideDown();
    });

    // slide up
    $('#slideUp').click(function(){
        $("#testeAnimacao").slideUp();
    });

    // slide toggle
    $('#slideToggle').click(function(){
        $("#testeAnimacao").slideToggle();
    });
    /* #################################################################### */

  


});