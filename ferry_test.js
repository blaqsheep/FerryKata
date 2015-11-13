var assert = require("assert");

describe("create cars and passengers to enter the ferry", function  () {
	// body...
	it('should create cars and colour for that colour ', function(){
		var CarInFerry = function(passengers, colour){
			this.passengers = passengers;
			this.colour = colour;
		};


  		var carInFerry = new CarInFerry(12, 'white');
  	

	assert.equal(carInFerry.passengers, 12);
	assert.equal(carInFerry.colour, 'white');
	
	});

	it('should limit the number of cars entering the ferry', function(){
		var Ferry = function(maxCars, maxPassengers){
			this.maxCars = maxCars;
			this.maxPassengers = maxPassengers;
		};

		var ferry = new Ferry(200, 370);

		assert.equal(ferry.maxCars, 200);
		assert.equal(ferry.maxPassengers, 370);
	})
});