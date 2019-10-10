const express = require('express')
const router = express.Router()

const todos = []
let id = 0

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = { id: id++, text: text, complete: false }

    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    todo = todos.find(t => t.id == todoID)
    todo.complete = !todo.complete
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    for(let todo in todos){
        if(todos[todo].id == todoID){
            todos.splice(todo,1)
        }
    }   
    res.send(todos)
})

module.exports = router