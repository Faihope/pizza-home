

$(document).ready(function () {

    $("#view").mouseenter(function () {
        // $(".About").show();
        alert("hello")
    })

});





































function order() {
    total();



}
function finalOrder(){
    delivery();
}

function total() {
    var type = document.getElementById("select-pizza").value;
    var topping = parseInt(document.getElementById("select-pizza-toppings").value);
    var quantity = document.getElementById("quantity").value;
    var crust = document.getElementById("select-pizza-crust").value;
    var size = document.getElementById("select-pizza-size").value;
    // var newSize=document.getElementById("newSize").name;
    var total = (parseInt(topping) + parseInt(crust) + parseInt(size)) * quantity;
    document.getElementById("pizzatype").innerHTML = type;
    document.getElementById("quant").innerHTML = quantity;
    document.getElementById("psize").innerHTML = size;
    document.getElementById("pcrust").innerHTML = crust;
    document.getElementById("ptopping").innerHTML = topping;
    document.getElementById("ptotal").innerHTML = total;



    return total;



}

function delivery(){
    var delivered=document.getElementById("delivery-selection").value;
    if(delivered){
        if (delivered=="no-delivery"){
            alert("Thank you for shopping with Pizza Home")

        }
        else{
           var location= prompt("Please Enter your Location");
            alert("Your pizza will be delivered in " + location);
        }
    }
}
