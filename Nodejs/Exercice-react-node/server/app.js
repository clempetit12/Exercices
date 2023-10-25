import express from "express"
import { readFileSync, writeFileSync } from "fs";
import  {Todos}  from "./Todos.js";
import cors from "cors"

const app = express()
//une version pour autoriser api
/* app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});  */

//autre  version pour autoriser api avec installation npm i cors
 app.use(cors())

app.use(express.json());




let todos = [
    {
        id: 1,
        name: "courir",
        status: false
    },
    {
        id: 2,
        name: "danser",
        status: false
    }
]

  
function readFile() {
    const file = readFileSync("data.json", { encoding: "utf-8" });
    todos = JSON.parse(file);
  }

function writeFile() {
    writeFileSync("data.json", JSON.stringify(todos));
  }
  readFile()

console.table(todos);

app.get("/todos", (req, res) => { // Utilisez (req, res) => ici
  res.send(todos)

});



app.post('/todos', (req, res) => {
    const {title} = req.body
    let newTodo = new Todos(title)
    console.log(newTodo);
    res.json(newTodo);
    todos.push(newTodo)
    console.log(todos);
    writeFile()
})

app.delete('/todos/:id', (req,res) => {
    const todoId = +req.params.id
   todos = todos.filter((t)=>t.id !== todoId) 
    writeFile()
    res.sendStatus(200)
 
})

app.put('/todos/:id', (req,res) => {
    const {title} = req.body
    const todoId = +req.params.id
    let foundTodo = todos.find(t => t.id === todoId)
    console.log(foundTodo);
    if (foundTodo) {
        foundTodo.title=title
        writeFile()
    
        res.sendStatus(200)}
        else {
            res.sendStatus(404)
        }

    }
   
)

app.listen(3000, () => {
    readFile()
    console.log("Server is running on http://127.0.0.1:3000");
});


