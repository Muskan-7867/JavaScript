// function return functions
function printFullName(firstName , LastName){
    function printName(){
        console.log(firstName,LastName);
    }
    return printName;
}
const ans = printFullName("Muskan","Loach");
ans();

