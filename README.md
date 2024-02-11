useEffect
  1. Without Dependancy Array - Triggers Initially and on every state changes
  useEffect(()=>{
    console.log("Welcome")
  })

  2. With Empty Dependancy array - Trigger Initially

  useEffect(()=>{
    console.log("Welcome")
  },[])

  3. With Dependancy Array: Triggers Initially and on mentioned state changes
  useEffect(()=>{
    console.log("Welcome")
  },[batch,mobile,email])
