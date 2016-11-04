//business logic
function BuildPizza(size,pep,bac,mush,ham) {
debugger;
  this.size = size;
  this.toppings = [pep,bac,mush,ham];
};

BuildPizza.prototype.calculateCost = function() {
debugger;
var price = 8

  if (this.size === "small") {
    price += 0;
  } else if (this.size === "medium") {
    price += 3;
  } else if ( this.size === "large") {
    price += 5;
  }

  if (this.toppings[0] === "pepperoni") {
    price += 1;
  }
  if (this.toppings[1] === "bacon") {
    price +=1;
  }
  if (this.toppings[2] === "mushroom") {
    price +=1;
  }
  if (this.toppings[3] === "ham") {
    price +=1;
  }
  return price;
};



//user interface
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
debugger;
    $("#cost").empty();
    var pizzaSize = $("#size").val();

    var pep = $("input#pep:checkbox[name=topping]:checked").val();
    var bac = $("input#bac:checkbox[name=topping]:checked").val();
    var mush = $("input#mush:checkbox[name=topping]:checked").val();
    var ham = $("input#ham:checkbox[name=topping]:checked").val();

    var result = new BuildPizza(pizzaSize,pep,bac,mush,ham);

    $("h5#sizeConfirm").append(result.size);
    $("h5#toppings").append(result.toppings);
    $("#cost").append("$ " + result.calculateCost());
    $(".well").show();

  });
});
