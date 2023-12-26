const accountId = 1234;
let accountEmail = "anmol@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 //not allowed

accountEmail = "as@asgmail.com";
accountPassword = "1234567";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword, accountCity, accountState]);