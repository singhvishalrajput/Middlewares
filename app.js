const express = require("express") // Importing the Express library
const app = express()  // Creating an Express application

// Middleware 1: Logs a message before processing any request

// app.use((req, res, next)=>{
//     // let {query} = req.query;
//     // console.log(query)
//     console.log("Hi, I am 1st middleware")
//     next();
//     // res.send("middleware finished")
//     console.log("this is after next.")
// })


// Middleware 2: Logs another message and demonstrates that code after next() doesn't run
// app.use((req, res, next)=>{
//     console.log("Hi, I am 2nd Middleware.")
//     return next()

//     console.log("this is after next.") // This won't execute.

// })


// Custom Middleware: Checks if the request has the correct token
const checkToken = (req, res, next)=>{
    let { token } = req.query;
    if(token == "giveaccess"){
        next();
    }
    else{
        throw new Error("ACESS DENIED.")
    }
}

// Route that uses the checkToken middleware 
app.get("/api", checkToken, (req, res)=>{
    res.send("ACCESS ACCEPTED.")
})



//logger - morgan (lighter one) (Middleware: Logs request details including method, hostname, path, and time)
app.use((req, res, next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time)
    next()
})


// Middleware: Specific to the "/random" route, logs a message
app.use("/random", (req, res, next)=>{
    console.log("I am only for random.")
    next()
})


// Route: Handles requests to the root URL ("/")
app.get("/", (req, res)=>{
    res.send("Hi, I am root")
})

// Route: Handles requests to the "/random" URL
app.get("/random", (req,res)=>{
    res.send("this is a random page.")
})

//404  Middleware: Handles 404 errors for undefined routes
app.use((req, res)=>{
    res.status(404).send("Page not found !")
})


// Starts the server and listens on port 8080
app.listen(8080,(req, res)=>{
    console.log("Server is listening at port 8080")
})