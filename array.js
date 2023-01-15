const array = ["Hanafi", "Adhi", "Prasetyo"]

array.forEach((value,index)=> console.log(`${value} : ${index}`))

//array queue
const queue = []

queue.push("Hanafi")
queue.push("adhi")
queue.push("prasetyo")

console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())


//array stack
const stack = []

stack.push("Hanafi")
stack.push("adhi")
stack.push("prasetyo")

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

//array search

const source = [1,2,3,4,5,1,2,3,4,5]

let a = source.find(value => value > 3)
console.log(a)
console.log(source.findIndex(value => value > 4 ))
console.log(source.includes(7))
console.log(source.indexOf(5))
console.log(source.lastIndexOf(5))


//array filter

const number = [1,2,3,4,5,6,7,8,9,10]

console.info(number.filter(value => value% 2 ==1))
console.info(number.filter(value => value% 2 ==0))

//array Transform

const nama = "hanafi adhi anak rajin dan berbakti aamiin".split(" ")
let Transform = nama.map(value => value.toUpperCase())
console.info(Transform.join(" "))

console.info( Transform.reduce((before,value)=> before + " " + value))
console.info( Transform.reduceRight((before,value)=> before + " " + value))

