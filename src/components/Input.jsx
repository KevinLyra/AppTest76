import React, { useEffect, useRef, useState } from 'react'

const Input = () => {

    // const [name, setName] = useState(null)
    

    // const usernameRef = useRef(null)
    // console.log(usernameRef)

    // const handleSubmit = () => {
    //     setName(usernameRef.current.value)
        
    // }

    const [count, setCount] = useState(0)
    const setIntervalRef = useRef()

    useEffect(() => {
        setIntervalRef.current =  setInterval(() => {
          setCount(prevCount => {
              return (
                prevCount +1
                )
          })
        }, 1000);
    
    }, [])

    const stopIncrement = () => {
        clearInterval(setIntervalRef.current)
        console.log('lancé')
    }
    
  return (
    <div className='m-3'>

        <h1>{count}</h1>
        <button onClick={stopIncrement}>Stop</button>
        {/* <p>{name}</p>
        <input ref={usernameRef} type="text"/>
        <button onClick={handleSubmit}>Valider</button> */}

        
    </div>
  )
}

export default Input