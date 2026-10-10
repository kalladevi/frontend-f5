import { useState ,useEffect} from "react"
import "./a.css"

const App=()=>{
  const [name,setName]=useState(0)
  const [condition,setCondition]=useState(false)
  const [attendence,setAttendence]=useState(true)
  useEffect(()=>{
    if (name===0){
    setName("deva")
  }
  else{
    setName("Sai")
  }

  },[])
  const click=()=>{
    setCondition(!condition)
  }
  const att=()=>{
    setAttendence(!attendence)
  }
  return(
    <>
    <h1>CSEA</h1>
    <h1>{name}</h1>
    {condition?<h1>True condition applied</h1>:<h1>False condition is applied</h1>}
    <button onClick={click}>Click</button>
    <br/>
    {/* {attendence?<h1 className="p">Present</h1>:<h1 className="a">Absent</h1>}
    <button onClick={att}>Attendence</button> */}
    {attendence?<button onClick={att} className="p">12481A0140</button>:<button onClick={att} className="a">12481A0140</button>}
    
    </>
  )
}
export default App
