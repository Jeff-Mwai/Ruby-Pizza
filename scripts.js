$(document).ready(function () {
    $('#my-form').submit(function (event) {
        function flavor() {
            var preferredFlavor = document.getElementById('flavor').value;
            return parseInt(preferredFlavor);
        }
        function size() {
            var pizzaSize = document.getElementById('size').value;
            return parseInt(pizzaSize);
        }
        function crust() {
            var preferredCrust = document.getElementById('crust').value;
            return parseInt(preferredCrust);
        }
        function toppings() {
            var preferredTopping = document.getElementById('blankCheckbox').value;
            return parseInt(preferredTopping);
        }
        function number() {
            var pizzaNumber = document.getElementById('quantity').value;
            return parseInt(pizzaNumber);
        }
    })

    function Order(flavor, size, crust, topping, quantity) {
        this.newFlavor = flavor;
        this.newSize = size;
        this.newCrust = crust;
        this.newTopping = topping;
        this.newQuantity = quantity;
    }
    //saves the users order
    var userInput = new Order(flavor(), size(), crust(), topping(), number());

    //calculates total expenditure of the user
    var totalCost =
        (userInput.newSize +
            userInput.newCrust +
            userInput.newTopping +
            userInput.newFlavor) *
        userInput.newQuantity;

    //prompts for the user

    alert("Your charges for Pizza " + totalCost);
    prompt("enter your email address ");
    prompt("enter your phone number ");
    prompt("enter your location ");
    alert("Your pizza will be delivered");

    alert("Your charges for Pizza is " + totalCost);
    prompt("enter your email address");
    prompt("enter your phone number");
    prompt("enter your location");
    alert("Your pizza will be delivered. Delivery fee is Ksh. 150");


    //a method to reset the form after all operations have been completed
    $("#text-center").reset();

    event.preventDefault();
});
  });
});