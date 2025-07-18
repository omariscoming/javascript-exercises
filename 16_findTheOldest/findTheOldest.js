const age = (birth, death)=>{
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(arr) {
    arr.reduce((current, next)=>{
        const currentPerson = age(current.yearOfBirth, current.yearOfDeath);
        const nextPerson = age(next.yearOfBirth, next.yearOfDeath);
        return currentPerson > nextPerson ? currentPerson : nextPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
