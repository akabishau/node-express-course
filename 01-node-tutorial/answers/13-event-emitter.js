const EventEmitter = require('events')
const myEmitter = new EventEmitter()

const userInfo = (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`)
}
myEmitter.on('response', userInfo)


myEmitter.on('response', () => {
    console.log('some other logic here')
})

myEmitter.emit('response', 'john', 34)


console.log('number of listeners: ' + myEmitter.listenerCount('response'))

myEmitter.removeListener('response', userInfo)
myEmitter.emit('response')
console.log('number of listeners: ' + myEmitter.listenerCount('response'))