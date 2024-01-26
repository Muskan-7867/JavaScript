// find square and cube of numbers using closures
function myFunction(power){
    return function(number){
        return number ** power
    }
}
const sqauare = myFunction(2)
const ans = sqauare(16)
console.log(ans)

const cube = myFunction(3)
const answer = cube(16)
console.log(answer)



