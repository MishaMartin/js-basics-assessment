const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  reader.question('Welcome to the password validator. Please input your password:', function(answer) {  
    if((`${answer.length}`) > 10){
      console.log("Success!")
      return 'success'
    } else {
      console.log("Password Fail")
    }})

