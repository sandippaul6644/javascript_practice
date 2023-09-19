const accountName = "sandip"
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState = "primaryaccount"; 

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(typeof accountName);
console.table([accountName, accountEmail, accountPassword, accountCity, accountState])