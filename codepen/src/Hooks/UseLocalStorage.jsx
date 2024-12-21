import {useEffect, useState} from 'react'

const PREFIX = 'codepen-clone-'
const UseLocalStorage = (key, initialValue) => {
       const preFixedKey = PREFIX + key
    const [value, setValue] = useState(()=>{
        const josnValue = localStorage.getItem(PREFIX + key)
        if(josnValue!= null) return JSON.parse(josnValue)
            if(typeof initialValue === 'function'){
               return initialValue()

            }else{
                return initialValue
            }
    })

    useEffect(() =>{
         localStorage.setItem(preFixedKey,JSON.stringify(value))
    },[preFixedKey, value])
   return [value, setValue]
}

export default UseLocalStorage