var assert = require("assert");

var Car = function(colour, passengers){
			this.colour = colour;
			this.passengers = passengers;
		};


var Ferry = function(maxPassengers, maxCars){
	this.maxPassengers = maxPassengers;
	this.maxCars = maxCars;

	this.passengerCount = 0;
	this.carCount = 0;


	this.board = function(car){

		// if statement should check if there is spaceh

		if(this.carCount < this.maxCars){
			this.passengerCount = this.passengerCount + car.passengers ;
			this.carCount = this.carCount + 1;
			return "Accepted";
		}
		else{
			return "Rejected";
		}
			
	};
		
};

describe ("Ferry Kata: create cars with passengers, colour of the cars and limit the number of cars and passengers boarding the Ferry", function(){
	it("should create a car with its colour and the number of passengers on-board", function(){
		
			var carInFerry = new Car('blaq', 4);

					assert.equal(carInFerry.colour, 'blaq');
					assert.equal(carInFerry.passengers, 4);
			})

	it("should board cars based on whether max number of passengers is not exceeded", function(){

		var ferry = new Ferry(45, 3);
		var carInFerry1 = new Car('blue', 5)
		var carInFerry2 = new Car('blaq', 11)
		
		assert.equal(ferry.passengerCount, 0);
		assert.equal(ferry.carCount, 0);

		//boarding a car to the ferry
		ferry.board(carInFerry1)

		assert.equal(ferry.passengerCount, 5);
		assert.equal(ferry.carCount, 1);
		
		ferry.board(carInFerry2)

		assert.equal(ferry.passengerCount, 16);
		assert.equal(ferry.carCount, 2);
		

	})

	it('should only allow 1 car into the ferry', function(){
		
		var ferry = new Ferry(3, 1);
		var car = new Car("blaq", 1);
		var car1 = new Car("blue", 4);

		assert.equal("Accepted", ferry.board(car));
		assert.equal("Rejected", ferry.board(car));

		assert.equal(ferry.carCount, 1);
		assert.equal(ferry.passengerCount, 1);

	})

	it('should only allow 3 passengers into the ferry', function(){

		var ferry = new Ferry(3, 5);
		var car = new Car("blaq", 3);
		var car1 = new Car("blue", 1);

		assert.equal("Accepted", ferry.board(car));
		assert.equal("Rejected", ferry.board(car));

		assert.equal(ferry.carCount, 1);
		assert.equal(ferry.passengerCount, 3);



	})
})