let nameObj = {
    name: "MUSKAN"
};

let PrintName = {
    name: "Steve",
    sayHi: function () {
        console.log(this.name);
    }
};

// Using bind to create a new function with a specific context
let HiFun = PrintName.sayHi.bind(nameObj);
// Hifun  is boundfunction
// printname is original function
//nameobj is  value to be used as this when the bound function is called. 

// Calling the bound function
HiFun();  
