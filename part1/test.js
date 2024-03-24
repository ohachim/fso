
// #ARRAYS

const t = [1, 2, 43]
console.log(t)

t.push(4)
console.log(t)
console.log(t.length)
console.log("test:" + t[3].toString())
t.forEach((value, id, rm) => { console.log(value)
                            console.log(id.toString() + "["  + rm.toString() + "]")})

t2 = t.concat(44444)
console.log(t2)
console.log(t)
let m1 = t.map(value => value - 4)
console.log(m1)
console.log(t)
const ele = m1.map(value => "<li>" + value + "</li>")
console.log(ele)
const [s1, s2, s3, s4] = m1
const [y1, ...r] = m1
console.log(r)
console.log(s4)


// #OBJECTS

const object1 = {
    name: 'Arto Hellas', 
    age: 35,
    education: 'PhD'
}

console.log(object1)


const object2 = {
    something: object1,
    test: "yes",
    name: 'object2',
}

console.log(object2)
console.log(object2.name)
console.log(object2['name'])
object2.something.address = "Berrechid. Morocco"
console.log(object2)
console.log(object1)


// #FUNCTIONS

const test = (a, b) => (a + b)

console.log(test(4, 4))

console.log([2, 3, 4,].map(value => value * value))

function lesum(a, b)
{
    return (a + b)
}

console.log(lesum(1, 1))

const u = function(a, b) {
    return (a + b)
}

const u2 = (a, b) => {
    return (a + b)
}
console.log(u(3, 4))
console.log(u2(3, 4))
