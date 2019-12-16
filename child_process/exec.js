const { exec } = require('child_process')
exec('sw', {}, (err, stdout, stderr) => {
  console.log(err, stdout + stderr)
})
