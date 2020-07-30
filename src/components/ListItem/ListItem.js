import React from 'react';
import './list-item.scss'

const ListItem = (props) => {
  
  return (
    <div className={`list-item ${props.listItem.done ? 'done' : ''}`}>
      <input value={props.listItem.done} onChange={props.setDone(props.listItem)} type="checkbox" className="done"/>
      <div className="description">
        {props.listItem.description}
      </div>
      <button onClick={props.deleteItem(props.listItem)} className="delete">Delete</button>
    </div>
  )
}

export default ListItem