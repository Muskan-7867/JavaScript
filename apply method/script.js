 // with the apply() method, you can write a method that can be used on different objects

const person = {
    fullName: function(){
        return `Your firstName is ${this.firstName} and your LastName  is ${this.lastName}`;
        
    } 
    
}
const person1 ={
   firstName : "muskan",
   lastName : "Loach"
}
 const result =  person.fullName.apply(person1);
 console.log(result);
 