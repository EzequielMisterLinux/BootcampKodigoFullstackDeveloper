import React, { useEffect, useState } from 'react'

export default function SeachWarrior() {

    const [name, setName]= useState("")


    console.log(name);
    


  return (
    
    <>
    <div>
        <input placeholder='insert name warrior' onChange={setName}></input>
    </div>
    </>
  )
}
