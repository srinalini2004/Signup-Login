function login(userName, password) {
  let usernames = ["ram", "arun", "teja"]
  let correctPassword = "Emp@123"

  if (!usernames.includes(userName)) {
    return "User Not Found, Please Signup"
  }

  if (password !== correctPassword) {
    return "Wrong Password..."
  }

  return "Login Successful..."
}

console.log(login("ram", "Emp@123"))
console.log(login("arun", "12345"))
console.log(login("john", "Emp@123"))
