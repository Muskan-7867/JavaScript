function register(callback){
    setTimeout(() => {
        console.log('register end')
        callback();
    },1000)
};
function email(callback){
    setTimeout(() => {
        console.log('email end')
        callback();
    },3000)
};

function login(callback){
    setTimeout(() => {
        console.log('login end')
        callback();
    },4000)
};

function userData(callback){
    setTimeout(() => {
        console.log('got userdata')
        callback();
    },1000)
};

function displayUserData(){
    setTimeout(() => {
        console.log('user data displayed')
       
    },1000)
};
register(function(){
    email(function(){
        login(function(){
            userData(function(){
                displayUserData();
            });
        });
    });
});
console.log('other  application work')

