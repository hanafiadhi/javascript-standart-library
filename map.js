const map = new Map()
map.set("Name","Hanafi")
map.set("Adress","Jawa Tengah")

console.log(map)
console.log(map.get("Name"))
console.log(map.get("ame"))

map.forEach((value,key)=> console.log(`el : ${key} value : ${ value}`))