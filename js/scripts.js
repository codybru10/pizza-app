//business logic
function BuildPizza(size,toppings) {
debugger;
  this.size = size;
  this.toppings = [toppings];
};

BuildPizza.prototype.calculateCost = function() {
debugger;
var price = 8;


  if (this.size === "small") {
    price += 0;
  } else if (this.size === "medium") {
    price += 3;
  } else if ( this.size === "large") {
    price += 5;
  }


  for (var index = 0; index < this["toppings"].length; index++) {
    if (this["toppings"][index] === 1) {
      price += 1
    } else {
      price += 0
    }
  }


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
debugger;
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var toppingsChecked = parseInt($(this).val());
      toppings.push(toppingsChecked);
    });


    var result = new BuildPizza(pizzaSize,toppings);


    $("#cost").append("$ " + result.calculateCost());
    $("h5#sizeConfirm").append("Size: " + result.size);
    $("h5#toppings").append("Toppings: " + result.toppings[0] + " " + result.toppings[1] + " " + result.toppings[2] + " " + result.toppings[3]);
    $(".well").show();

  });
});
