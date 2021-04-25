

$(document).ready(function () {

    


});






function order() {
    total();
    validateQuantity()



}
function finalOrder() {
    delivery();
}

function total() {
    var type = document.getElementById("select-pizza").value;
    var topping = document.getElementById("select-pizza-toppings").value;
    var topping1 = document.getElementById("select-pizza-toppings");
    
    var quantity = document.getElementById("quantity").value;
    var crust = document.getElementById("select-pizza-crust").value;
    var crust1 = document.getElementById("select-pizza-crust");
    var crust2 = crust1.options[crust1.selectedIndex].text;
    var size = document.getElementById("select-pizza-size").value;
    var size1 = document.getElementById("select-pizza-size");
    var size2 = size1.options[size1.selectedIndex].text;
    var topping2 = topping1.options[topping1.selectedIndex].text;
    // var newSize=document.getElementById("newSize").value;
    var total = (parseInt(topping) + parseInt(crust) + parseInt(size)) * quantity;
    document.getElementById("pizzatype").innerHTML = type;
    document.getElementById("quant").innerHTML = quantity;
    document.getElementById("psize").innerHTML = size2;
    document.getElementById("pcrust").innerHTML = crust2;
    document.getElementById("ptopping").innerHTML = topping2;
    document.getElementById("ptotal").innerHTML = total;
    return total;
    // var e = document.getElementById("elementId");
    // var value = e.options[e.selectedIndex].value;
    // var text = e.options[e.selectedIndex].text;
    //   


}



function delivery() {
    var delivered = document.getElementById("delivery-selection").value;
    if (delivered) {
        if (delivered == "no-delivery") {
            alert("Thank you for shopping with Pizza Home")

        }
        else {
            var location = prompt("Please Enter your Location");
            alert("Your pizza will be delivered in " + location + " with an extra cost of ksh 200.");
        }
    }
}

function validateQuantity() {
    var quantity = document.getElementById("quantity").value;
    if (quantity)
        if (quantity < 0 || "") {
            alert("please enter a positive number");
            return false;
        }
        else {
            return true;
        }
}


