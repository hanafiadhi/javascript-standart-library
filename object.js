const nama = {
    firstName : "Hanafi",
    address : "Cilacap"
}

// Object.freeze(nama)
/**
 * untuk object frezee tidak data dan propertynya tidak bisa di hapus atau di ubah
 * tidak bisa menambah property juga
 */
Object.seal(nama)
/**
 * Untuk objcet seal data bisa di rubah tetapi propertynya tidak bisa di hapus
 * tidak bisa menambah property juga
 */

nama.firstName = "BUDI"
delete nama.address

console.info(nama)

{
    //Object Assign
    const target = {
        firstName : "Hanafi"
    }
    const source = {
        address : "Cilacap"
    }
    Object.assign(target,source)

    console.info(target)
}
{
    //Object Property Name and Value

    const person = {
        firstName : "Hanafi",
        address : "Cilacap"
    }

    console.info(Object.values(person))
    console.info(Object.getOwnPropertyNames(person))
}