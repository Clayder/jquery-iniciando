$(document).ready(function(){
    $('form').submit(function(){
       
        var nome = $(':input[name=nome]').val();
        var email = $(':input[name=email]').val();
        var tel = $(':input[name=tel]').val();
        // checkbox
        var term = $(':input[name=term]').is(":checked");

        var errors = "";
        // limpa o elemento
        $('#errors').html("");

        if(nome === "" || email === "" || tel === "" || !term){
            errors = "Todos os campos são obrigatórios";
        }
        if(errors){
            $('#errors').html("<div class='alert alert-danger' role='alert'>"+  errors + "</div>");
            return false;
        }
        return true;
    });
});