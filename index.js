// Code your solution here
function findMatching(drivers, searchWord) {
    return drivers.filter(driver => driver.toLowerCase().includes(searchWord.toLowerCase()))
}

function fuzzyMatch(drivers, beginLetter) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(beginLetter.toLowerCase()))
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}