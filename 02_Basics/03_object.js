// object literals
const mynew=Symbol("key2")
const JsUser ={
    name :"Umang",
     [mynew]: "hello",
    // mynew: "hello",
    age: 18,
    "full name":"Umang joshi",
    location: "Jaipur",
    isloggedIn: false,
    lastLogin: ["Monday", "sunday"],
    email: "joshiumang.com"
}
console.log(JsUser.email)
// . only used when we acsess the object but it is not used for all like "String declaration in obj"
console.log(JsUser["name"]);
// [] is used with "" and it also can used to display the symbol form this type.
console.log(JsUser["full name"]);
console.log(JsUser[mynew]);
//other case of symbol
// console.log(typeof(JsUser["mynew"]));

JsUser.email="joshiumang311@gmail.com"
console.log(JsUser["email"]);
console.log(JsUser);
// change valus

// Object.freeze(JsUser)
JsUser.email="joshiumang1@gmail.com"
console.log(JsUser);

// function making
JsUser.greeting =function(){
    console.log("Hello js user");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2 =function(){
    console.log(`Hello js user, ${this.email}`);
}
console.log(JsUser.greeting2);
console.log(JsUser.greeting2());
