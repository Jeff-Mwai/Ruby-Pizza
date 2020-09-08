
$(document).ready(function () {
    $('#btnSubmit').click(function (event) {
        $('#mySummary').show();
        var flavorType = $('#preferredFlavor').val();
        var flavorsize = $('#size').val();
        var flavorCrust = $('#crust').val();
        var toppingValue = $("input[name='top']:checked").val();


        var userInput = new Order(flavor(), size(), crust(), toppings(), number());
        console.log(userInput);
        var totalCost = userInput.totoalcost();
        alert(totalCost);
        console.log(totalCost);

        $('#typeOfPizza').text(flavorType);
        $('#typeOfSize').text(flavorsize);
        $('#typeOfTopping').text(toppingValue);
        $('#typeOfCrust').text(flavorCrust);
        $('#typeOfQty').text(number());
        $('#typeOfCost').text(totalCost);


    })

    $('.pickUp').click(function () {
        alert('Thanks for your Order. Kindly Pick it up at the counter');
    })

    $('.deliver').click(function () {
        $('.cdata-overlay').show();
    })
    $('.go').click(function () {
        alert('Your Order will be delivered soon. Thank You')
    })



    function flavor() {
        var pizzaFlavor = document.getElementById('preferredFlavor').value;

        if (pizzaFlavor === 'Peperroni Pizza') {
            return 100
        }
        else if (pizzaFlavor === 'Margheritta Pizza') {
            return 200
        }
        else if (pizzaFlavor === 'Bbq Steak Pizza') {
            return 150
        }
        else if (pizzaFlavor === 'Chicken Tikka Pizza') {
            return 100
        }
        else if (pizzaFlavor === 'Meat Lovers Bbq Pizza') {
            return 200
        }
        else if (pizzaFlavor === 'Paprikka Spiced Pizza') {
            return 130
        }

    }

    
    function crust() {
        var preferredCrust = document.getElementById('crust').value;
        if (preferredCrust === 'Crispy') {
            return 170
        }
        else if (preferredCrust === 'Stuffed') {
            return 210
        }
        else if (preferredCrust === 'Glutten Free') {
            return 300
        }
    }
    function toppings() {
        return 100
    }
    function number() {
        var pizzaNumber = document.getElementById('quantity').value;
        return parseInt(pizzaNumber);

    }
    function Order(flavor, size, crust, topping, quantity) {
        this.newFlavor = flavor;
        this.newSize = size;
        this.newCrust = crust;
        this.newTopping = topping;
        this.newQuantity = quantity;
    }

    Order.prototype.totoalcost = function () {
        return ((this.newFlavor + this.newCrust + this.newSize + this.newCrust + this.newTopping) * this.newQuantity)
    }


});