const Discord = require('discord.js')
const client = new Discord.Client()
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please input your token.\n', tokencollected => {
    const token = tokencollected
    readline.close();
    client.login(token)
    .catch(err => {
      console.log('This token is not valid. \nMake sure it\'s copied correctly and try again.')
      process.exit()
    })
    console.log('Validating token. If this takes a long time it means token is not valid.')
client.once('ready',() => {
    console.log('This token is valid. \nCan\'t login with this token even though it\'s valid? \nTry reinstalling Discord.js using npm i discord.js')
    process.exit();
})
process.on('unhandledRejection',() => {
  console.log('This token is not valid. \nMake sure it\'s copied correctly and try again.')
  process.exit()
})
//This shouldn't happen.
  });
