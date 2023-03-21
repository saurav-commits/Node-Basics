// taking command line input

// console.log(process.argv[3]) 

// const fs = require('fs');

// const input = process.argv;

// if(input[2]=='add') {
//     fs.writeFileSync(input[3],input[4])
// } else if(input[2]=='remove') {
//     fs.unlinkSync(input[3])
// } else {
//     console.log("invalid input");
// }

// creating  multiple files usning node

/*
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');

*/
// for(i=0;i<5;i++) {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
// }

// fs.readdir(dirPath,(err, files) => {
//     files.forEach((item)=>{
//         console.warn("file name is ", item);
//     })
//     // we can get data in the webservers bu twe cannot get data from the drives in hte pc.
// })

// creating a file 
// const filePath= `${dirPath}/banana.txt`;

// writing a file
// fs.writeFileSync(filePath,"this is banana file");

// reading a file
// fs.readFile(filePath,'utf8', (err, item)=> {
//     console.log(item);
// })

// updating a file
// fs.appendFile(filePath, 'and vikram is a banana man',(err)=> {
//     if(!err) console.log("file is updated")
// })

// renaming a file

// fs.rename(filePath, `${dirPath}/fruit.txt`,(err) => {
//     if(!err) console.log("file is renamed");
// })


//deleting a  file
// fs.unlinkSync(`${dirPath}/fruit.txt`)

/*
let a=12;
let b=0;

setTimeout(() => {
    b=20;
},2000) // this will tke the vlue of b only

console.log(a+b) // since this gets executed erly so this handled once.

*/

// Promise in Node

// let a=10
// let b=0
// let waitingData =  new Promise((resolve, reject)=> {
//     setTimeout(()=> {
//         resolve(30)
//     },3000)
// })

// waitingData.then((data) => {
//     b=data;
//     console.log(a+b);
// })



// example 2
// const promiseA = new Promise((resolve, reject) => {
//     resolve(777);
// });

// promiseA.then((val) => console.log("asynchronoues logging has val: ", val));
// console.log("immediate logging");


/*
function getSumNum(a,b) {
    const customPrice = new Promise((resolve, reject) => {
        const sum = a+b;

        if(sum<=5) {
            resolve("Let's go!!")
        } else {
            reject(new Error('OOps!... less than 5'))
        }
    })
    return customPrice
}

// consiming the promise
getSumNum(1,3).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

*/


/*  creating pages and sending and recieving data from the browser..*/
const express = require('express');
const app = express();

/*
app.get("", (req, res) => {
    console.log("data sent by browser =>>> ", req.query.name);
    res.send("Welcome "+ req.query.name);
});

app.get('/about', (req,res)=>{
    res.send("About Us");
});

app.get('/help', (req, res) => {
    res.send("Help");
})


 */

/* rendering data HTML and Json */

/////////////////////
/*
app.get("", (req, res) => {
    res.send(`
        <h1> Welcome, to the Home Page</h1> <a href="/about" > Go to About Page</a>
    `);
});

app.get("/about", (req, res) => {
    res.send(`
    <input type="text" placeholder="User Name" />
    <button> Click Me</button><a href="/"> Go to Home Page </a>
    `);
});
*/


const path = require('path');
const publicPath = path.join(__dirname,'public');

// static method is used to load static page
// app.use(express.static(publicPath));

// removing link from a web page using sendFile(`${pathConstant}/url`)

// now using ejs we are going to make a dynamic webpage


//1.
app.set('view engine', 'ejs');
// now we need to create a views folder as by default using any template we use views by default

app.get('',(_,resp) => {
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/profile',(_,resp) => {
    const user={
        name: 'saurav',
        email: 'saurav@test.com',
        city: 'Delhi', 
        skills: ['Java','SQL','Node']
    }
    resp.render('profile',{user});
});

app.get('/login', (_,resp) => {
    resp.render('login');
});

app.get('/about', (_,resp) => {
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help', (_,resp) => {
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/pagenot.html`)
});

app.listen(8080);