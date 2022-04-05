// on CMD run - 
// npm i 
// npm i express --save

// to run - 
// npm start 

// to stop 
// Ctrl + C

const express = require('express');
const app = express();
const port = 9999;

app.get('/', (request, response) => {
    response.send('Welcome to my app ${port}');
    console.log('App is running...');
});

app.listen(port, () => {
    console.log('open http://localhost:9999/ to view the output.');
});




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

// console.log("One");

// getFun = (abc) => {
//     setTimeout(() => {
//         console.log("Two");
//         abc();
//     }, 2000);
// }

// fun = () => {
//     console.log("Three");
// }

// getFun(fun);


