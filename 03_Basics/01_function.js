/*
function myDetails(){
    console.log("U");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("G");
}

myDetails()

// FUNCTION with parameter
function addtwoNum(num1,num2){
    console.log(num1+num2);
}
addtwoNum()//NaN output
addtwoNum(1,5)//6 op
addtwoNum(1)//Nan
addtwoNum("a",4)//as argument a4
addtwoNum(4,"y")//as argument 4y
addtwoNum//no effect only get reference
addtwoNum(5,null)//5 op
addtwoNum(null,6)//6 op

const result=addtwoNum(4,8)//give 12
console.log("Result",result);//get undefined result

function login(username){
    if(username==="umang"){
        console.log("hello");
    }
    return `${username} just logged in `
}
console.log(login("umang"))
*/

function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(200,3345,55,55));


//(...)=rest or spred operator.

const umk={
username:'umang',
rollno: 32
}
console.log(umk);

function umk1(obj){
    console.log(`umang prints ${obj.rollno} and ${obj.username}`);}

umk1(umk)// also have second method we can pass value with object argument

console.log(umk1({
    username:"prince",rollno:31}))
//array making in function

const arr= [3,4,5]

function umk2(getarray){
    console.log(`umang gives ans ${getarray[0]}`);
}
console.log(umk2([56,889,99,22,66]));

umk2(arr)