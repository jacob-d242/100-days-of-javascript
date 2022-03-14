////document.getElementById("count").innerText = 5

//let count = 41
//creating a variable to hold the variableage and its value

//console.log(count)

//let myAge = 22
// let humanDogRatio = 2

//let myDogAge = myAge * humanDogRatio

//console.log(myDogAge)


//let count = 5

//console.log(count)
//function decrement() {
//    console.log('42')
//}
//decrement()
//let keyword defines a function inside a scop

//let lap1 = 34
//let lap2 = 33
//let lap3 = 36
//function moracha() {
   
//    let logLapTime= lap1 + lap2 + lap3
//    console.log( logLapTime)
//}

//moracha()


//let lapsCompleted = 0;

//function increment() {
//     lapsCompleted = lapsCompleted + 1;
//}

//increment()
//increment()
//increment()

//console.log(lapsCompleted)

let countEl = document.getElementById("count-el")

console.log(countEl)
let count = 0;
function increment() {
    count = count + 1;
    // @ts-ignore
    countEl.innerText = count;
    console.log(count)
}


function save() {
    console.log(count)
}

/