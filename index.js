function signup(userName) {
  let usernames = ["ram", "arun", "teja"];

  if (usernames.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    usernames.push(userName);
    return "Signup Successful, Please Login";
  }
}

console.log(signup("ram"));
console.log(signup("sri"));
