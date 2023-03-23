import React from 'react';
import  "../style/detailTable.css";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


function DetailTable({show, user,item}) {


return (
    <div className={`${show ?`mainDetail`:`mainDetailNone`}` }>
      <KeyboardDoubleArrowLeftIcon className='arrow'/>
        <header>USER DETAIL</header>
        <div className='tableDetail'>
         <tr>
           <td className='key'>Item Id</td>
           <td>:</td>
           <td>{item.id}</td>
         </tr>
         <tr>
           <td className='key'>Item Title</td>
           <td>:</td>
           <td>{item.title}</td>
          
         </tr>
         <tr>
           <td className='key'>Id</td>
           <td>:</td>
           <td>{user.id}</td>
         </tr>
         <tr>
           <td className='key'>Name</td>
           <td>:</td>
           <td>{user.name}</td>
         </tr>
         <tr>
           <td className='key'>Email</td>
           <td>:</td>
           <td>{user.email}</td>
         </tr>
         <tr>
           <td className='key'>Phone</td>
           <td>:</td>
           <td>{user.phone}</td>
         </tr>
      </div>
    </div>
  )
}

export default DetailTable