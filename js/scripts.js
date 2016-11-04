//business logic
function BuildPizza(size,toppings) {
  this.sizeOf = size;
  this.toppings = toppings;
};

BuildPizza.prototype.calculateCost = function() {
debugger;
var price = 8;

  if (this.sizeOf === "small") {
    price += 0;
  } else if (this.sizeOf === "medium") {
    price += 3;
  } else if ( this.sizeOf === "large") {
    price += 5;
  }

  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i] === "pepperoni" || this.toppings[i] === "bacon" || this.toppings[i] === "mushrooms" || this.toppings[i] === "ham") {
      price += 1;
    }
  };

  return price;
};



//user interface
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#cost").empty();
    $("#sizeConfirm").empty();
    $("#toppings").empty();
    var pizzaSize = $("#size").val();
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingsChecked = $(this).val();
      toppings.push(toppingsChecked);
    });


    var yourPizza = new BuildPizza(pizzaSize,toppings);


    $("#cost").append("$ " + yourPizza.calculateCost());
    $("h5#sizeConfirm").append("Size: " + yourPizza.sizeOf);
    $("h5#toppings").append("Toppings: " + yourPizza.toppings);
    $(".well").show();

  });
});
