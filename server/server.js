const express = require('express')
const server = express()

const todos = [
    {label: 'do dishes', completed: false},
    {label: 'get food', completed: false},
    {label: 'clean room', completed: false},
    {label: 'other stuff', completed: true} 
]

server.use(express.static('../client'))
server.use(express.json())

server.get('/api/todos', (req, res) => {
    res.send(todos)
})

server.post('/api/todos/add', (req, res) => {
    const newTodo = req.body.todo
    todos.push(newTodo)
    res.send('successfully added new todo')
})

server.post('/api/todos/:index/update', (req, res) => {
    const index = req.params.index
    const checked = req.body.checked
    todos[index].completed = checked
    res.send("todo updated successfully")
})

server.post('/api/todos/:index/remove', (req, res) => {
    //The same thing as const index = req.params.index
    const {index} = req.params
    todos.splice(index, 1)
    res.send('todo removed successfully')
})

server.listen(8080)
console.log('server is listening on port 8080')

