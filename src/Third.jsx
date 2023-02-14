import React from 'react'
import './Third.css'
function Third() {
  const obj1 = {
    id :1001,
    name: 'bob',
    age :12,
    ph : 987654321
  }
  return (
    <div>
      
        <div className='card'>
        <p>ID : {obj1.id}</p>
        <p>Name : {obj1.name}</p>
        <p>Age : {obj1.age}</p>
        <p>Phone Number : {obj1.ph}</p>
        </div>
      
    </div>
  )
}

export default Third