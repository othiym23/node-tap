var tap = require('../..')

if (!process.argv[2]) {
  tap.spawn(process.execPath, [ __filename, 'child' ])
  return
}

console.error('stderr')
console.log('stdout')
tap.pass('this is ok')
