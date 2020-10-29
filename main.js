const axios = require('axios');
var password = "fdciabdul123";
const fs = require("fs");
var user = "tesuser677685";
var pass = "pass123";
var n = 10;
const timer = ms => new Promise(res => setTimeout(res, ms))


async function load () { 
  for (var i = 0; i <=n; i++) {

  var username = user + n++;
const email1 = new TM(username);
   const requestBody = 
{
"data": {
"attributes":{
 "firstName":"Wahyuni",
 "lastName":"Ida",
 "displayName": username,
 "email": email1,
 "password":pass}
}
}
var url = "https://kotakode.com/api/v1/users";
axios.post(url ,requestBody)
  .then((result) => {
var i = result.data;

console.log(`
 Success Creating Kotakode Account 
ID : ${i.data[0].id}
Type : ${i.data[0].type}
Email : ${username}@gmail.com
Password : ${pass}
`)

fs.writeFile('akun.txt', username +"@gmail.com:"+ password +"\n",  {'flag':'a'},  function(err) {
         if (err) {
       console.error("gagal"+ err);

}
    })




}
)        



  .catch((err) => {
console.log("Error when creating account");
  })
await timer(3000);
}
}

load();


