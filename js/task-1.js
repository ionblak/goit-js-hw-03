let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};
user.mood = "happy";
user["full time"] = true;
user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}

console.log(user);
console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
