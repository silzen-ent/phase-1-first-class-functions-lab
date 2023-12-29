// Code your solution in this file!

//////////////////////////////////////

// Test 1: 
const driversNames = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers){
    console.log(drivers.slice(0,2))
    return drivers.slice(0, 2);
}
returnFirstTwoDrivers(driversNames); 


// Test 2: 
const returnLastTwoDrivers = function(drivers){
    console.log(drivers.slice(-2))
    return drivers.slice(-2);
}
returnLastTwoDrivers(driversNames)


// Test 3:
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


// Test 4: 
const createFareMultiplier = function (multiplyValue){
    return function(value){
        console.log(multiplyValue * value)
        return multiplyValue * value
    }
}
createFareMultiplier(5)(5);


// Test 5: 
const fareDoubler = createFareMultiplier(2);
fareDoubler(10)


// Test 6: 
const fareTripler = createFareMultiplier(3); 
fareTripler(50);


// Test 7: 
const  selectDifferentDrivers = function (drivers, twoDrivers){
    return twoDrivers(drivers);
}
selectDifferentDrivers(driversNames, returnFirstTwoDrivers);



