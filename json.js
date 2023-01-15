const Person = {
    firstName : "Hanafi",
    lastName : "Prasetyo",
    address : {
        country : "Indonesia",
        cisty : "Cilcap"
    }
}

const json = JSON.stringify(Person)
const personAgain = JSON.parse(json)

console.info(json)
console.info(personAgain)