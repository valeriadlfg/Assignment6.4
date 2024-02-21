let animal = {
    species: "Turtle",
    name: "Jorge",
    color: "Green",
    accesories: "Red cool hat",
    profession: "Being a cool turtle",
    age: "25",
    swims: true,
    

    swims: function(distance) {
        console.log("The " + this.species + " swims " + distance + " meters." );
    }
};


animal.swims(5); 



console.log(animal.species);
console.log (animal.name); 
console.log(animal.color);   
console.log(animal.accesories);     
console.log(animal.profession); 
console.log(animal.age);

let tacos = ["Al pastor", "Carne asada", "Fish", "Vegetarian"];

tacos.addTaco = function(newTaco) {
    this.push(newTaco);
    console.log("Added " + newTaco + " to the list of tacos.");
};

tacos.addTaco("Barbacoa");

console.log(tacos);