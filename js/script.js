

$(document).ready(function () {

    $("#view").mouseenter(function () {
        // $(".About").show();
        alert("hello")
    })

});





































function order() {
    total();


}

function total() {
    var type = document.getElementById("select-pizza").value;
    var topping = parseInt(document.getElementById("select-pizza-toppings").value);
    var quantity = document.getElementById("quantity").value;
    var crust = document.getElementById("select-pizza-crust").value;
    var size = document.getElementById("select-pizza-size").value;
    var total = (parseInt(topping) + parseInt(crust) + parseInt(size)) * quantity;
    document.getElementById("pizzatype").innerHTML = type;
    document.getElementById("quant").innerHTML = quantity;
    document.getElementById("psize").innerHTML = size;
    document.getElementById("pcrust").innerHTML = crust;
    document.getElementById("ptopping").innerHTML = topping;
    document.getElementById("ptotal").innerHTML = total;




    // alert(total);
    return total;



}
