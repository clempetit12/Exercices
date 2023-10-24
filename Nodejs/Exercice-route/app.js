import express, { response } from "express";

const app = express()
const todos = [{}]


app.use(express.json());


app.get("/", (req, res) => {
    res.send("<h1>Todos!</h1>");
});

// ajouter une todo
app.post("/todos", (req, res) => {
    let newTodo =req.body
    console.log(newTodo);

        todos.push(newTodo)
  
    
});

//récupérer une todo particulière
app.get("/todos/:todoId", (req, res) => {
const todoId = +req.params.todoId
console.log(todoId);
console.log(todos);
    const foundTodo = todos.find(todo=> todo.todoId === todoId )
    console.log(foundTodo);
    if(foundTodo){
        res.status(200).json(foundTodo)
    } else {
        
        res.status(404).send("Tâche non trouvée");
    }
});
  

//récupérer listes des todos
app.get("/todos", (req, res) => {
    res.send(todos)
    
})






//ouvrir http
app.listen("3000", () => {
    console.log("http://127.0.0.1:3000");
});
