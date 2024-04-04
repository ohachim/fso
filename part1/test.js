
// // #ARRAYS

// const t = [1, 2, 43]
// console.log(t)

// t.push(4)
// console.log(t)
// console.log(t.length)
// console.log("test:" + t[3].toString())
// t.forEach((value, id, rm) => { console.log(value)
//                             console.log(id.toString() + "["  + rm.toString() + "]")})

// t2 = t.concat(44444)
// console.log(t2)
// console.log(t)
// let m1 = t.map(value => value - 4)
// console.log(m1)
// console.log(t)
// const ele = m1.map(value => "<li>" + value + "</li>")
// console.log(ele)
// const [s1, s2, s3, s4] = m1
// const [y1, ...r] = m1
// console.log(r)
// console.log(s4)


// // #OBJECTS

// const object1 = {
//     name: 'Arto Hellas', 
//     age: 35,
//     education: 'PhD'
// }

// console.log(object1)


// const object2 = {
//     something: object1,
//     test: "yes",
//     name: 'object2',
// }

// console.log(object2)
// console.log(object2.name)
// console.log(object2['name'])
// object2.something.address = "Berrechid. Morocco"
// console.log(object2)
// console.log(object1)


// // #FUNCTIONS

// const test = (a, b) => (a + b)

// console.log(test(4, 4))

// console.log([2, 3, 4,].map(value => value * value))

// function lesum(a, b)
// {
//     return (a + b)
// }

// console.log(lesum(1, 1))

// const u = function(a, b) {
//     return (a + b)
// }

// const u2 = (a, b) => {
//     return (a + b)
// }
// console.log(u(3, 4))
// console.log(u2(3, 4))

// // #OBJECTS METHODS AND "this"

// const arto = {
//     name: "Aqua Fina",
//     age: 43,
//     education: "None",
//     greet: function() {
//         console.log("Hello, my name is " + this.name)
//     },
//     doAddition: function(a, b) {
//         console.log(a + b)
//     }, 
// }

// arto.greet()

// arto["growOlder"] = function() {
//     this.age += 1
// }

// arto.growOlder()

// console.log(arto.age)

// const ref = arto.doAddition

// ref(1, 2)
// const ref2 = arto.greet

// ref2.bind(arto)()

// // setTimeout(arto.greet.bind(arto), 1000)


// // #CLASSES


// class Person
// {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     greet() {
//         console.log("Hello, my name is " + this.name)
//     }
// }

// const oth = new Person("Othmane Hachim", 33)
// const moh = new Person("Moha Amine Hachim", 33)

// oth.greet()
// moh.greet()

// #COMPONENT STATE, EVENT HANDLER


import { useState } from "react"

const Display = ({counter}) =>  <p>Le counter is <strong> {counter} </strong></p>

const Click = ({onClick, value}) => <button onClick={onClick}> {value} </button>

const App = () => {
  
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)
  return (<div>
    <Click onClick={() => { 
                         console.log("Left clicked")
                         const updatedLeft = clicks.left + 1
                         setClicks({...clicks, left: updatedLeft})
                         setAllClicks(allClicks.concat('L'))
                         setTotal(updatedLeft + clicks.right)
                         }} value={clicks.left} />
    <Click onClick={() => { 
                         console.log("Right clicked")
                         const updatedRight = clicks.right + 1
                         setClicks({...clicks, right: updatedRight})
                         setAllClicks(allClicks.concat('R'))
                         setTotal(clicks.left + updatedRight)
                         }} value={clicks.right} />
    <p><strong>{allClicks.join(' ')}</strong></p>
    <p><strong> Totatl :</strong> {total}</p>
                         </div>)

  }

