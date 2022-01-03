import { MyClass1 } from './MyClass1.js'
import { MyClass2 } from './MyClass2.js'

const message1 = new MyClass1().myMethod1()
const message2 = new MyClass2().myMethod2()

const log = document.querySelector('#log')
log.innerHTML += `<p>${message1}`
log.innerHTML += `<p>${message2}`