const justFood = (pocetOsob1) =>{
   return `Catering od justFood pro ${pocetOsob1} osob za ${pocetOsob1 * 125} Kč.`
}
console.log(justFood(20))

const yourMama = (pocetOsob2) => {
   return `Catering od yourMama pro ${pocetOsob2} osob za ${pocetOsob2 * 175} Kč.`
}
console.log(yourMama(300))

const flavourHaven = (pocetOsob3) => {
return `Catering od flavourHaven pro ${pocetOsob3} osob za ${pocetOsob3 * 500} Kč.`
}    
console.log(flavourHaven(500))


const createEvent = (eventName, pocetOsobNaAkci, price4) => {
return `Událost ${eventName} s cateringem od Flavour Haven pro ${pocetOsobNaAkci} lidí za ${price4*pocetOsobNaAkci} Kč.`
}

console.log(createEvent("Vyhlášení cen Anděl", 1000, 300))

