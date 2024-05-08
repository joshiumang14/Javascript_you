//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// scope is basically curlybraces. it have two types 1)block scope which is consider in globaly
// 2)globle scope it is main scope.

// var is no longer use becoz if we declare ones then if we also inicialise at any place that time var value will be updated that means it is not a good sense.
// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
// bde icecreme de skte hai le nhi skte.

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// we can use this becoz we declare any function as value of obj. 
// addTwo(5)
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))