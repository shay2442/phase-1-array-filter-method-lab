const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, possibleMatch) {
   return collection.filter(name => name.toLowerCase() === possibleMatch.toLowerCase())
    
}

//findMatching(drivers, 'Ryan');

function fuzzyMatch(collection, providedLetters) {
    console.log('collection', collection)
    console.log('letters', providedLetters)
    return collection.filter(function(person){
    return person.startsWith(providedLetters)

    }) 
    // for(let i=0; i< drivers.length; i++) {
    //     drivers[i].startsWith('letters') {
    //         return 
    //     }
        
    // }
}

let startsWithLetters = drivers.filter(firstLetter())

function matchName(drivers, searchName) {
    return drivers.filter(driver => driver.name === searchName)
}