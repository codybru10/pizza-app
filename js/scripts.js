//business logic
function BuildPizza(size) {
  this.size = size;
  this.toppings = [];
};

BuildPizza.prototype.cost = function() {
debugger;
var price = 8

  if (this.size = 1) {
    price += 0;
  } else if (this.size = 2) {
    price += 3;
  } else if ( this.size = 3) {
    price += 5;
  }
  return price;
};

//user interface
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
debugger;
    var pizzaSize = parseInt($("#size").val());
    var result = new BuildPizza(pizzaSize);

    $("#cost").append(result.cost());
    //var pizzaToppings = $("input:checkbox[name=topping]:checked").val();

  });
});
