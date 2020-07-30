import React, { useState } from 'react';
import ListItem from '../ListItem/ListItem'
import './todo-list.scss'

const TodoList = () => {
  const [list, setList] = useState([])
  const [newItemDescription, setNewItemDescription] = useState('')
  
  const createNewItem = () => {
    if (newItemDescription.length) {
      setList([...list, {
        description: newItemDescription,
        done: false
      }])
      setNewItemDescription('')
    }
  }
  
  const inputChanged = (e) => {
    setNewItemDescription(e.target.value)
  }
  
  const deleteItem = (item) => () => {
    let todoList = [...list]
    todoList.splice(todoList.indexOf(item) , 1)
    setList(todoList)
  }
  
  const setDone = (item) => () => {
    let todoList = [...list]
    const index = todoList.indexOf(item)
    todoList[index].done = !todoList[index].done
    setList(todoList)
  }
  
  function renderList () {
    return list.map( item =>
      <ListItem
        key={item.description}
        deleteItem={deleteItem}
        listItem={item}
        setDone={setDone}
      >
      </ListItem>
    )
  }
  
  return (
    <div className="todo-list">
      <div className="title">
        Your todo
      </div>
      <div className="create">
        <input value={newItemDescription} onChange={inputChanged} type="text"/>
        <button onClick={createNewItem}>Create new</button>
      </div>
      <ul className="list">
        {renderList()}
      </ul>
    </div>
  )
}

export default TodoList