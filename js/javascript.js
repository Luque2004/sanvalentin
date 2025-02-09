$(document).ready(function(){
    const frases =["","Te equivocaste!","No hace gracia","Para","Rata","Tu lo has querido..."]
    var contador = 0;
    
    $(".button01").on("click",function(event){
        contador += 1;
       
        if(contador ===1){
            $(".button01").text(frases[contador])
        }
        else if(contador ===2){
            $(".button01").text(frases[contador])
        }
        else if(contador ===3){
            $(".button01").text(frases[contador])
        }
        else if(contador ===4){
            $(".button01").text(frases[contador])
        }
        else if(contador ===5){
            $(".button01").text(frases[contador])
        }
        else if(contador ===6){
            $(".button01").remove()
            $("img").addClass("unactive")
            $("h1").addClass("unactive")
            $("#change").css({"margin-top":"0px"})
            $("#buttons").css({"margin-top":"0px"})
            $(".button0").css({"width":"1480px","font-size":"190px","padding":"280px"})
        }
        
        event.preventDefault()
    })
    $(".button0").on("click",function(event){
        $(".button0").remove();
        $(".button01").remove();
        $("#change").addClass("margin");
        $("img").attr("src","img/agaporni.gif")
        $("h1").text("Sabia que dirias que sí <3");
        $("img").removeClass("unactive");
        $("h1").removeClass("unactive");
        event.preventDefault();
    })
})