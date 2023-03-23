import React, { useEffect,useRef } from 'react';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import RemoveIcon from '@mui/icons-material/Remove';
import DetailTable from './DetailTable';
import  "../style/row.css"

function Row({item}) {
const [show, setShow] = useState(false)

let SideBoxRef = useRef();
 const [user, setUser] = useState({})
  
const getsUser = async()=>{
 const res= await fetch(`https://jsonplaceholder.typicode.com/users/${item.userId}`)

   const data = await res.json()

   setUser({...data})
 }

 useEffect(()=>{
    let handler = (e)=>{
      if(!SideBoxRef.current.contains(e.target)){
         setShow(false)
          
      }
    };
    document.addEventListener('mousedown', handler);
    return() =>{document.removeEventListener('mousedown', handler)}
  },[])

  const onClickFunc= async(e)=>{
              await getsUser()
               return setShow(!show)
   }

              
 return(<>
    <tr>
     <td className='id'>{item.id}</td>
     <td className='title'>{item.title}</td>
     <td>{item.completed==true ? <DoneIcon/>:<RemoveIcon/>}</td>
     <td>
       <button onClick={onClickFunc} className='userDetail' ref={SideBoxRef} >View User</button>
     </td>
     <div className='detailenclosure'>{show&&            <td><DetailTable show={show} user={user} item={item}/></td>}
     </div>
          
    </tr>
    </>)
  
}

export default Row