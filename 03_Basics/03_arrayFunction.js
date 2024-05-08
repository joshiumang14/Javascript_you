const user ={
    username: "umang", price:600,

    welcomeMessage:function(){
        console.log(` ${this.username} welcome to website`)
        console.log(this)
    }// for current context use we use this 
    

}
console.log(user.username);
console.log(user["username"]);
console.log(this);
user.welcomeMessage()
user.username="prince"
user.welcomeMessage()
console.log(this);//for global access we use we get empty {} this means current context.
// if we check the this in browser it gives window as context becoz that have already have.
