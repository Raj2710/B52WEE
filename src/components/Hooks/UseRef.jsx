import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
//update of ref will not cause side effects but dom will be updated
function UseRef() {
    let renderCount = useRef(0)
    let [count,setCount] = useState(0)
    let [name,setName] = useState("")
    useEffect(()=>{
        renderCount.current = renderCount.current+1
    })
    let ref1 = useRef()
    let ref2 = useRef()
    let ref3 = useRef()
    let ref4 = useRef()
    const handleOtp = ()=>{
        let otp = ref1.current.value+ref2.current.value+ref3.current.value+ref4.current.value
        alert("The otp is "+otp)
        
    }
    useEffect(()=>{
        ref1.current.focus()
    },[])

  return <div className='container-fluid'>
    <h4>Button Clicked {count} times</h4>
    <input type="text" onChange={(e)=>setName(e.target.value)}/>
    <h4>The component Rendered {renderCount.current} times</h4>
    <Button onClick={()=>setCount(count+1)}>Click Me To Count</Button>
    <br/>
    <br/>
    <div className='container'>
        <h1>Enter Your OTP Here!</h1>
        <br/>
        <input type='text' maxLength={1} ref={ref1} onChange={(e)=>ref2.current.focus()}/>
        <input type='text' maxLength={1} ref={ref2} onChange={(e)=>ref3.current.focus()}/>
        <input type='text' maxLength={1} ref={ref3} onChange={(e)=>ref4.current.focus()}/>
        <input type='text' maxLength={1} ref={ref4} onChange={(e)=>handleOtp()}/>
        <br/>
        <br/>
        <Button onClick={handleOtp}>Submit</Button>
    </div>
  </div>
}

export default UseRef