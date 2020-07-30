import React from 'react';
import './list-item.scss'

const ListItem = ({ listItem, setDone, deleteItem }) => {
  
  return (
    <div className={`list-item ${listItem.done ? 'done' : ''}`}>
      <input value={listItem.done} onChange={setDone(listItem)} type="checkbox" className="done"/>
      <div className="description">
        {listItem.description}
      </div>
      <button onClick={deleteItem(listItem)} className="delete">Delete</button>
    </div>
  )
}

export default ListItem