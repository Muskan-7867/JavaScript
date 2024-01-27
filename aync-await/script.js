//here is the updated example of callback example using async-await
function register(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('register end')
            resolve();
        },5000)
    })
}
function email(){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
         console.log('email end')
         resolve();
      },3000)
  });
}

function login(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('login end')
     resolve();
    },4000)
});
}

function userData(callback){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('got userdata')
      resolve();
    },1000)
});
}

function displayUserData(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('user data displayed')
       
    },1000)
});
}
// register(function(){
//     email(function(){
//         login(function(){
//             userData(function(){
//                 displayUserData();
//             });
//         });
//     });
// });
// register()
// .then(email)
// .then(login)
// .then(userData)
// .then(displayUserData)
console.log('other  application work')
async function authenciate(){
    await register();
    await email();
    await login();
    await userData();
    await displayUserData();

}
authenciate();

