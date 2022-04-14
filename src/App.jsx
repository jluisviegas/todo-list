import React, { useState } from 'react'
import './Style.css'
import Form from "./components/Form"
import List from "./components/List"
import Todo from "./components/Todo"

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setInputText={setInputText} />
      <List todos={todos} />
    </div>
  )
}

export default App;
