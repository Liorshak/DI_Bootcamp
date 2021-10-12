let building = {
    numberLevels : 4,
    numberOfAptByLevel : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        "Sarah": [3, 990],
        "Dan":  [4, 1000],
        "David": [1, 500],
    },
}

// Console.log the number of levels in the building.
console.log(`the number of levels in the building is: ${building.numberLevels}`);
// Console.log how many apartments are on levels 1 and 3.
console.log(`sum of the apartments in levels 1 and 3: ${building.numberOfAptByLevel[1]+building.numberOfAptByLevel[3]}`);
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
secTen=building["nameOfTenants"][1];
console.log(`${secTen} have ${building["numberOfRoomsAndRent"][secTen][0]} rooms in his apprt`)
// Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
if ((building.numberOfRoomsAndRent.Sarah[1]+building.numberOfRoomsAndRent.David[1])>building.numberOfRoomsAndRent.Dan[1]){
    building.numberOfRoomsAndRent.Dan[1]= building.numberOfRoomsAndRent.Sarah[1]+building.numberOfRoomsAndRent.David[1];
}
console.log(building.numberOfRoomsAndRent.Dan[1]);
// If it is than increase Dan’s rent.