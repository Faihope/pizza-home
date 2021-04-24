

$(document).ready(function(){

    $("#view").mouseenter(function(){
        // $(".About").show();
        alert("hello")
    })

});





































function order(){
    total();
   
    
}

function total(){
   var topping= parseInt(document.getElementById("select-pizza-toppings").value);
  var quantity=document.getElementById("quantity").value;
  var crust=document.getElementById("select-pizza-crust").value;
  var size=document.getElementById("select-pizza-size").value;
  document.getElementById("quant").innerHTML=quantity;



var total=(parseInt(topping)+ parseInt(crust) + parseInt(size) )*quantity;

// alert(total);
return total;


   
}
