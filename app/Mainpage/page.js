
"use client"
import React from 'react'
import { useState } from 'react'
const Page = () => {
  const [getvalues,Setgetvalues]=useState([
    
  ])
 const [getoff,Setgetoff]=useState(false)
  const valuesget = (e)=>{
    Setgetvalues([
      ,{
        id:Math.random(),
        name: e.target.value
      }
    ]);
    
  }
  const toogleon = ()=>{
    Setgetoff(!getoff)
  }
  return (
    <>
<form action="">
<label htmlFor="">NAME</label> <br />
<input type="text" className='border border-black' placeholder="Enter Text"
onChange={valuesget}

 /><br />

</form>
{getoff ? 
getvalues.map((values)=>{
  return(
    <div key={values.id}>{values.name}</div>
  )
}) : null
}


<button type='button'
onClick={toogleon}>Submit</button>


    </>
  )
}

export default Page