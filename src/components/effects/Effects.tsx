import { useEffect, useState } from "react"


const Effects = () => {

    const [count,setCount] = useState<number>(0)

    useEffect(()=>{
        console.log('the count value is ',count)

        return () =>{
            console.log('clean up functiond')
        }
    },[count])

  return (
    <div>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
        <button onClick={()=>setCount (count - 1)}>Decrease</button>
        <h3>the count is {count}</h3>
    </div>
  )
}

export default Effects