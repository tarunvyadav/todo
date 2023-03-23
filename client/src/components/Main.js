import React, { useEffect,useRef } from 'react';
import  "../style/main.css"
import SearchIcon from '@mui/icons-material/Search';
import Row from './Row.js';
import { useState } from 'react';






function Main() {

  const [todo, setTodo] = useState([])
  const [searchTerm, setSearchTerm]= useState('')
  const todoList = async()=>{

  const res= await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      setTodo([...data])
  }

  const dscFunc =()=>{
    setTodo([...todo.sort((a,b)=> b.id-a.id)])
  }
 
  const ascFunc =()=>{
    setTodo([...todo.sort((a,b)=> a.id-b.id)])
  }

  useEffect(()=>{
    todoList()
  },[])




  return (
    <div className="main">
    <div className='filter'>
        <div className='sort'>
        <button onClick={ascFunc} className="ASC">ASC</button>
        <button onClick={dscFunc} className="DSC">DSC</button>
    </div>
    <div className='searchBar'>
        <SearchIcon className='SearchIcon' />
        <input type="text" placeholder='Search...' onChange={(event)=>{setSearchTerm(event.target.value)}}/>
        </div>
    </div>
    
    <div className='mainTable'>
        <table>
          <tr>
           <th>TODO ID</th>
           <th>TITLE</th>
           <th>STATUS</th>
           <th>ACTION</th>
          </tr>
          {todo.filter((val)=>{
            if(searchTerm==""){
              return val
          }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
          }).map((item)=>{
             return(<Row item={item} key={item.id}/>)
          })}
        </table>
    </div>
    </div>
  )
}

export default Main