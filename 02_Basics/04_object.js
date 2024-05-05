/* 
// const instaUser=new Object();

//not singletone objecrt::
const instaUser ={}  


// console.log(instaUser);
// singletone object
instaUser.id="123abc"
instaUser.email="uj@gmail.com"
instaUser.name="umangji"
// console.log(instaUser);

// nested object
const registerUser={
    email: "uj@gmail.com",
    Name:{
        fullName:{
            FirstName:"umang",
            LastName:"joshi"
        }
    },
    id:"123nmj"
}
//console.log(registerUser);
// console.log(registerUser.Name.fullName.FirstName);


const obj1={1:"a",2:"b"}
const obj2={1:"a",5:"b"}
// const obj3={obj1,obj2}
// console.log(obj3);

//if we use assign method means is cannot perform same value.
// {}=is used as target & obj=used as a sources.

// const obj3=Object.assign({}, obj1,obj2)
// console.log(obj3);

const obj4=Object.assign({},obj1,obj2)
console.log(obj4);

// console.log(obj3==obj4);
//obj are not equals


const obj3=Object.assign( obj1,obj2)
console.log(obj3);
console.log(obj3===obj1);
// if we does not use {} as a taget and compare with obj1 bydefault obj1 convert it a target by log.


// ===without assign method we use shatter as a array ===
const obj6={...obj2,...obj1}
console.log(obj6);

//When we use database that time value will be use as array with multiple objects.

const User1=[
    {
    id:1,
    email:"uj@gmail.com"
    },
    {
    id:2,
    email:"uj@gmail.com"
    },
    {
    id:3,
    email:"uj@gmail.com"
    }   
]
console.log(User1);

console.log(User1[2]);
// want to access by object
console.log(User1[2].id);

console.log(Object.keys(instaUser))

console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))// in this 1 pos is ket then 2 pos is value.

console.log(instaUser.hasOwnProperty('email'));

*/


/*
{
    {
        "results": [
          {
            "gender": "female",
            "name": {
              "title": "Miss",
              "first": "Jennie",
              "last": "Nichols"
            },
            "location": {
              "street": {
                "number": 8929,
                "name": "Valwood Pkwy",
              },
              "city": "Billings",
              "state": "Michigan",
              "country": "United States",
              "postcode": "63104",
              "coordinates": {
                "latitude": "-69.8246",
                "longitude": "134.8719"
              },
              "timezone": {
                "offset": "+9:30",
                "description": "Adelaide, Darwin"
              }
            },
            "email": "jennie.nichols@example.com",
            "login": {
              "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
              "username": "yellowpeacock117",
              "password": "addison",
              "salt": "sld1yGtd",
              "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
              "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
              "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
            },
            "dob": {
              "date": "1992-03-08T15:13:16.688Z",
              "age": 30
            },
            "registered": {
              "date": "2007-07-09T05:51:59.390Z",
              "age": 14
            },
            "phone": "(272) 790-0888",
            "cell": "(489) 330-2385",
            "id": {
              "name": "SSN",
              "value": "405-88-3636"
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/75.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            "nat": "US"
          }
        ],
        "info": {
          "seed": "56d27f4a53bd5441",
          "results": 1,
          "page": 1,
          "version": "1.4"
        }
      }
}
*/


// Destructuring objects
const instaUser ={} 
instaUser.id="123abc"
instaUser.email="uj@gmail.com"
instaUser.name="umangji"
// console.log(instaUser);
const {email}=instaUser//**
console.log(email);
// for new name 
const {id : add}=instaUser//**
console.log(add);