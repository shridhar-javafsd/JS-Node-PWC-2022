// node 01-script.js 

// NodeJS - js engine - v8 
// NPM - 

// create-react-app app-name

// asychronous JS 

// console.log("One");

// setTimeout(() => {
//     console.log("Two");
// }, 2000);

// console.log("Three");

// solutions 

console.log("One");

getFun = (abc) => {
    setTimeout(() => {
        console.log("Two");
        abc();
    }, 2000);
}

fun = () => {
    console.log("Three");
}

getFun(fun);

